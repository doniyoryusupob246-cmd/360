var APP_DATA = {
  "scenes": [
    {
      "id": "0-360",
      "name": "360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.11333115279386,
          "pitch": 0.04367573856264784,
          "rotation": 0,
          "target": "2-000"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-360-1",
      "name": "360-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.6036221939457818,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.027623879643618565,
          "pitch": 0.20375577975959303,
          "rotation": 0,
          "target": "2-000"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-000",
      "name": "000",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2118348497875484,
          "pitch": 0.2598725092565459,
          "rotation": 0,
          "target": "1-360-1"
        },
        {
          "yaw": 0.7423056778353363,
          "pitch": 0.1790799428795946,
          "rotation": 0,
          "target": "0-360"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
