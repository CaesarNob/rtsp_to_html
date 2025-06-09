const WebRTC = require('node-webrtc');
const RTSPServer = require('rtsp-streaming-server');

class RTSPtoWebRTC {
    constructor() {
        this.rtspServer = new RTSPServer({
            serverPort: 5000,
            clientPort: 5001,
            webrtcPort: 5002
        });
    }

    async start() {
        await this.rtspServer.start();
    }

    async connectStream(rtspUrl) {
        // เชื่อมต่อ RTSP stream และแปลงเป็น WebRTC
        const peerConnection = new WebRTC.RTCPeerConnection();
        // ... setup WebRTC connection
        return peerConnection;
    }
}

module.exports = RTSPtoWebRTC;