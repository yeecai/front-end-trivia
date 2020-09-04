  
#WebRTC
- web real-time communication
- allow p2p connection

## Process

1. exchange SDP through signaling server
2. exchange candidate through signaling server
3. connected, exchange media stream through RTCConnection

 ##  Signaling

 the process of exchanging SDP objects(network info) websocket, xhr, google cloud messaging etc.

 any messaging mechanism

 any protocol also the pitfall


 ### NAT

 stun :
 - public IP
 - simple cheap

 turn: 

 - cloud fail back
 - if stun can't find IP

 ice: 

 - try stun
 - if stun doesn't work, try turn


## APIs

- RTCConnection
- RTCDataChannel