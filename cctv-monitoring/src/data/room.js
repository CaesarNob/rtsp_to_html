const rooms = [
    {
        building: "อาคาร 1",
        floor: 2,
        room: "Room 1201",
        cameras: [
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.52:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.53:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.54:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.55:554/live.sdp" }
        ]
    },
    {
        building: "อาคาร 1",
        floor: 2,
        room: "Room 1202",
        cameras: [
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.40:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.41:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.42:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.43:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.45:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.46:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.50:554/live.sdp" }
        ]
    },
    {
        building: "อาคาร 1",
        floor: 3,
        room: "Room 1301",
        cameras: [
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.76:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.77:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.78:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.79:554/live.sdp" }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 2,
        room: "Room 2201",
        cameras: [
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.60:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.59:554/live.sdp" }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 3,
        room: "Room 2301",
        cameras: [
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.85:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.86:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.87:554/live.sdp" }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 3,
        room: "Room 2302",
        cameras: [
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.82:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.83:554/live.sdp" }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 4,
        room: "Room 2401",
        cameras: [
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.92:554/live" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.93:554/live" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.95:554/live" }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 4,
        room: "Room 2402",
        cameras: [
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.91:554/live" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.94:554/live" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.89:554/live" }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 5,
        room: "Room 2501",
        cameras: [
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.100:554/live" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.101:554/live" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.102:554/live" }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 5,
        room: "Room 2502",
        cameras: [
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.97:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.98:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.99:554/live.sdp" },
            { angle: "ยังไม่ตั้งชื่อ", url: "rtsp://admin:P@ssw0rd*16@10.88.100.103:554/live.sdp" }
        ]
    }
];

export default rooms;