import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 105
      },
      {
        "x": "boat",
        "y": 10
      },
      {
        "x": "train",
        "y": 203
      },
      {
        "x": "subway",
        "y": 122
      },
      {
        "x": "bus",
        "y": 164
      },
      {
        "x": "car",
        "y": 163
      },
      {
        "x": "moto",
        "y": 138
      },
      {
        "x": "bicycle",
        "y": 19
      },
      {
        "x": "horse",
        "y": 97
      },
      {
        "x": "skateboard",
        "y": 273
      },
      {
        "x": "others",
        "y": 165
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 173
      },
      {
        "x": "boat",
        "y": 141
      },
      {
        "x": "train",
        "y": 277
      },
      {
        "x": "subway",
        "y": 108
      },
      {
        "x": "bus",
        "y": 272
      },
      {
        "x": "car",
        "y": 283
      },
      {
        "x": "moto",
        "y": 293
      },
      {
        "x": "bicycle",
        "y": 69
      },
      {
        "x": "horse",
        "y": 298
      },
      {
        "x": "skateboard",
        "y": 299
      },
      {
        "x": "others",
        "y": 214
      }
    ]
  }
]

export const MyResponsiveLine = ({ _data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 10, bottom: 30, left: 50 }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false
    }}
    curve="natural"
    colors={{ scheme: 'pastel1' }}
    lineWidth={1}
    pointSize={8}
    pointColor={"white"}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    enableArea={true}
    useMesh={true}
  />
)