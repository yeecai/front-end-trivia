// a simple example of data proxying
<template>
  <div>
    <input type="text" v-modal />
    <h3 v-text />
  </div>
</template>

<script>
export default {
    

    let data = {}

Object.defineProperty(data, 'name', {
    get() {
        return name
    },
    set(newVal) {
        name = newVal
        let arr = document.querySelectorAll('[v-text');

        arr.forEach((item) => {
            item.innerText = data.name
        })

        document.querySelector('[v-modal]').value = data.name
    }
})
document.querySelector('v-modal').oninput = function () {
    data.name = this.value
}


data.name = 'Ye'
console.log(data.name);

}
</script>