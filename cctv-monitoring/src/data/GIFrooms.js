const rooms = [
    {
        building: "อาคาร 1",
        floor: 2,
        room: "Room 1201",
        cameras: [
            {
                angle: "กล้องที่ 1",
                gifUrl: "../images/1201/1201-1.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.52:554/live.sdp"
            },
            {
                angle: "กล้องที่ 2", 
                gifUrl: "../images/1201/1201-2.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.53:554/live.sdp"
            },
            {
                angle: "กล้องที่ 3",
                gifUrl: "../images/1201/1201-3.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.54:554/live.sdp"
            },
            {
                angle: "กล้องที่ 4",
                gifUrl: "../images/1201/1201-4.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.55:554/live.sdp"
            }
        ]
    },
    {
        building: "อาคาร 1",
        floor: 2,
        room: "Room 1202",
        cameras: [
            {
                angle: "กล้องที่ 1",
                gifUrl: "../images/1202/1202-1.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.40:554/live.sdp"
            },
            {
                angle: "กล้องที่ 2",
                gifUrl: "../images/1202/1202-2.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.41:554/live.sdp"
            },
            {
                angle: "กล้องที่ 3",
                gifUrl: "../images/1202/1202-3.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.42:554/live.sdp"
            },
            {
                angle: "กล้องที่ 4",
                gifUrl: "../images/1202/1202-4.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.43:554/live.sdp"
            },
            {
                angle: "กล้องที่ 5",
                gifUrl: "../images/1202/1202-5.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.45:554/live.sdp"
            },
            {
                angle: "กล้องที่ 6",
                gifUrl: "../images/1202/1202-6.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.46:554/live.sdp"
            },
            {
                angle: "กล้องที่ 7",
                gifUrl: "../images/1202/1202-7.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.50:554/live.sdp"
            }
        ]
    },
    {
        building: "อาคาร 1",
        floor: 3,
        room: "Room 1301",
        cameras: [
            {
                angle: "กล้องที่ 1",
                gifUrl: "../images/1301/1301-1.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.76:554/live.sdp"
            },
            {
                angle: "กล้องที่ 2",
                gifUrl: "../images/1301/1301-2.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.77:554/live.sdp"
            },
            {
                angle: "กล้องที่ 3",
                gifUrl: "../images/1301/1301-3.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.78:554/live.sdp"
            },
            {
                angle: "กล้องที่ 4",
                gifUrl: "../images/1301/1301-4.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.79:554/live.sdp"
            }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 2,
        room: "Room 2201",
        cameras: [
            {
                angle: "กล้องที่ 1",
                gifUrl: "../images/2201/2201-1.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.60:554/live.sdp"
            },
            {
                angle: "กล้องที่ 2",
                gifUrl: "../images/2201/2201-2.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.59:554/live.sdp"
            }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 3,
        room: "Room 2301",
        cameras: [
            {
                angle: "กล้องที่ 1",
                gifUrl: "../images/2301/2301-1.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.85:554/live.sdp"
            },
            {
                angle: "กล้องที่ 2",
                gifUrl: "../images/2301/2301-2.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.86:554/live.sdp"
            },
            {
                angle: "กล้องที่ 3",
                gifUrl: "../images/2301/2301-3.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.87:554/live.sdp"
            }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 3,
        room: "Room 2302",
        cameras: [
            {
                angle: "กล้องที่ 1",
                gifUrl: "../images/2302/2302-1.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.82:554/live.sdp"
            },
            {
                angle: "กล้องที่ 2",
                gifUrl: "../images/2302/2302-2.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.83:554/live.sdp"
            }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 4,
        room: "Room 2401",
        cameras: [
            {
                angle: "กล้องที่ 1",
                gifUrl: "../images/2401/2401-1.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.92:554/live"
            },
            {
                angle: "กล้องที่ 2",
                gifUrl: "../images/2401/2401-2.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.93:554/live"
            },
            {
                angle: "กล้องที่ 3",
                gifUrl: "../images/2401/2401-3.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.95:554/live"
            }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 4,
        room: "Room 2402",
        cameras: [
            {
                angle: "กล้องที่ 1",
                gifUrl: "../images/2402/2402-1.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.91:554/live"
            },
            {
                angle: "กล้องที่ 2",
                gifUrl: "../images/2402/2402-2.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.94:554/live"
            },
            {
                angle: "กล้องที่ 3",
                gifUrl: "../images/2402/2402-3.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.89:554/live"
            }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 5,
        room: "Room 2501",
        cameras: [
            {
                angle: "กล้องที่ 1",
                gifUrl: "../images/2501/2501-1.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.100:554/live"
            },
            {
                angle: "กล้องที่ 2",
                gifUrl: "../images/2501/2501-2.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.101:554/live"
            },
            {
                angle: "กล้องที่ 3",
                gifUrl: "../images/2501/2501-3.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.102:554/live"
            }
        ]
    },
    {
        building: "อาคาร 2",
        floor: 5,
        room: "Room 2502",
        cameras: [
            {
                angle: "กล้องที่ 1",
                gifUrl: "../images/2502/2502-1.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.97:554/live.sdp"
            },
            {
                angle: "กล้องที่ 2",
                gifUrl: "../images/2502/2502-2.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.98:554/live.sdp"
            },
            {
                angle: "กล้องที่ 3",
                gifUrl: "../images/2502/2502-3.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.99:554/live.sdp"
            },
            {
                angle: "กล้องที่ 4",
                gifUrl: "../images/2502/2502-4.gif",
                rtspUrl: "rtsp://admin:P@ssw0rd*16@10.88.100.103:554/live.sdp"
            }
        ]
    }
];

export default rooms;