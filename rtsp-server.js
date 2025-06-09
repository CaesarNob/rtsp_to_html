import Stream from 'node-rtsp-stream';
import rooms from './cctv-monitoring/src/data/room.js';

console.log('Starting RTSP to WebSocket streaming server...');

rooms.forEach(room => {
  room.cameras.forEach((camera, index) => {
    try {
      const streamUrl = camera.url;
      // สร้าง port ที่ไม่ซ้ำกันสำหรับแต่ละกล้อง
      const wsPort = 9999 + parseInt(room.room.replace(/\D/g,'')) + index;
      
      console.log(`Setting up stream for ${room.room} camera ${index + 1}`);
      console.log(`RTSP URL: ${streamUrl}`);
      console.log(`WebSocket Port: ${wsPort}`);

      const stream = new Stream({
        name: `${room.room}_camera_${index}`,
        streamUrl: streamUrl,
        wsPort: wsPort,
        ffmpegOptions: {
          '-stats': '',
          '-r': 30,
          '-s': '640x480',
          // เพิ่ม options สำหรับ RTSP
          '-rtsp_transport': 'tcp',
          '-stimeout': '30000000'
        }
      });

      stream.on('start', () => {
        console.log(`Stream started: ${room.room} camera ${index + 1}`);
      });

      stream.on('error', (err) => {
        console.error(`Stream error for ${room.room} camera ${index + 1}:`, err);
      });

    } catch (error) {
      console.error(`Failed to initialize stream for ${room.room} camera ${index + 1}:`, error);
    }
  });
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});