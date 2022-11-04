import { ResponsivePie } from '@nivo/pie'

const _data = [
  {
    "id": "stylus",
    "value": 267,
  },
  {
    "id": "sass",
    "value": 390,
  },
  {
    "id": "haskell",
    "value": 557,
  }
]

export const MyResponsivePie = ({ data, scheme }) => (
  <ResponsivePie
    data={data ?? _data}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    innerRadius={0.8}
    padAngle={1}
    cornerRadius={5}
    activeOuterRadiusOffset={8}
    colors={{ scheme: scheme ?? 'paired' }}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    enableArcLabels={false}
    arcLabelsSkipAngle={10}
  />
)