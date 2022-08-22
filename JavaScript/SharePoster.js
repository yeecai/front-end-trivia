import React, { useEffect, useRef, useState, createRef } from "react";
import { useTranslation } from "react-i18next";
import { getUserQrCode } from "@api/invitation";
import { Modal, Image as AndImage } from "antd";
const QrCode = require("qrcode.react");
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Virtual, Navigation } from "swiper";
import "./index.less";
SwiperCore.use([Virtual, Navigation]);

export default function SharePoster(props) {
  const [activeIndex, setActiveIndex] = useState(0); //当前选择海报
  const [inviterUrl, setInviterUrl] = useState(""); // 分享链接
  const [inviterPosters, setInviterPosters] = useState([]); // 海报打底图片URL
  const posterImages = useRef({}); // 合成二维码海报图片url, 使用对象存储防止打乱循序
  const [length, setLength] = useState(0); // 合成二维码海报图片url
  const posterRefs = useRef([]); // 海报画布ref
  const qrCompRef = createRef(); // 二维码画布ref
  const { t } = useTranslation();

  const updateImages = (src, index) => {
    const newCurrent = { ...posterImages.current };
    newCurrent[index] = src;
    posterImages.current = newCurrent;
    if (index === inviterPosters.length - 1) setLength(index); // 所有图片合成完毕，触发渲染，防止抖动
  };

  const makePoster = (src, index, qrCanvas) => {
    return new Promise((resolve, reject) => {
      const base_image = new Image();
      base_image.crossOrigin = "anonymous"; // 解决跨域问题，请求图片会带上origin，否则canvas转图片会报错

      base_image.onload = () => {
        const canvas = posterRefs.current[index];
        const context = canvas.getContext("2d");
        const image = new Image();
        image.onload = () => {
          context.drawImage(base_image, 0, 0, 1156, (1156 * base_image.height) / base_image.width); // 第一步画空海报
          context.drawImage(image, 835, 2150, 220, 220); // 第二步画二维码
          const finalPoster = convertCanvasToImage(canvas);
          finalPoster.onload = () => resolve(finalPoster.src);
        };
        image.src = qrCanvas.toDataURL("image/jpg");
        image.onerror = () => reject("图片加载失败");
      };
      base_image.src = src;
    });
  };

  const makePosters = async () => {
    let qrCanvas = qrCompRef.current.querySelector("canvas");

    if (inviterPosters.length) {
      for (let index = 0; index < inviterPosters.length; index++) {
        const result = await makePoster(inviterPosters[index], index, qrCanvas);
        updateImages(result, index);
      }
    }
  };
  const preloadImages = async () => {
    if (inviterPosters.length) {
      for (let index = 0; index < inviterPosters.length; index++) {
        const base_image = new Image();
        base_image.crossOrigin = "anonymous"; // 解决跨域问题，请求图片会带上origin，否则canvas转图片会报错
        base_image.onload = () => {};
        base_image.src = inviterPosters[index];
      }
    }
  };
  //将canvas转图像
  const convertCanvasToImage = (canvas) => {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
  };

  useEffect(() => {
    getUserQrCode().then((res) => {
      setInviterUrl(res?.inviterUrl);
      setInviterPosters([...res?.inviterPosters]);
    });
  }, []);

  useEffect(() => {
    posterRefs.current = posterRefs.current.slice(0, inviterPosters.length);
  }, [inviterPosters.length]);

  useEffect(() => {
    if (posterRefs.current.length && props.visible) {
      makePosters();
    }
    preloadImages();
  }, [inviterPosters.length, props.visible]);

  const ShareFaceBook = () => {
    FB.ui(
      {
        method: "feed",
        link: inviterUrl
        // quote: t("sharePoster.quote")
      }
      // function (response) {}
    );
  };
  const ShareTiwtter = () => {
    var url = inviterUrl;
    var text = t("sharePoster.quote");
    window.open(
      "http://twitter.com/share?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text),
      "",
      "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
    );
  };
  const onDownloadClick = () => {
    setTimeout(() => {
      const canvas = posterRefs.current[activeIndex];
      let image = canvas.toDataURL("image/jpg");
      let anchor = document.createElement("a");
      anchor.href = image;
      anchor.download = `${+new Date()}.jpg`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }, 0);
  };

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  const Posters = () => (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides={true}
      onSlideChange={(swiper) => onSlideChange(swiper)}
      navigation={true}
      virtual
      className="swiper_container"
    >
      {Object.keys(posterImages?.current)?.map((index) => (
        <SwiperSlide virtualIndex={index} key={index} className="card">
          <AndImage src={posterImages?.current[index]} key={index} style={{ height: 400 }} preview={true}></AndImage>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const PostersCanvas = () =>
    inviterPosters.map((src, index) => (
      <canvas
        id="canvas"
        width="1156px"
        height="2436px"
        style={{ display: "none", overflow: "scroll" }}
        key={index}
        ref={(el) => (posterRefs.current[index] = el)}
      ></canvas>
    ));

  return (
    <div>
      <Modal
        title={t("invitation.makePoster")}
        centered
        visible={props.visible}
        onOk={() => props.setVisible(false)}
        onCancel={() => props.setVisible(false)}
        width={1000}
        className="invitation-content"
        footer={[]}
      >
        <span className="word1">{t("invitation.sharePoster")}</span>

        <div className="container">{Posters()}</div>
        <div className="share-poster-footer flex-row">
          {/* <img
            className="label2"
            src={require("@src/assets/colorful-svg/share-twitter.svg")}
            alt="twitter"
            onClick={() => ShareTiwtter()}
          /> */}
          <img
            className="label2"
            src={require("@src/assets/icon-png/invitation-poster-download.png")}
            alt="FaceBook"
            onClick={() => onDownloadClick()}
          />
        </div>
        {/* 隐藏画布 */}
        <div ref={qrCompRef} style={{ display: "none", overflow: "scroll" }}>
          <QrCode value={inviterUrl} />
        </div>
        {!!inviterPosters.length && PostersCanvas()}
      </Modal>
    </div>
  );
}
