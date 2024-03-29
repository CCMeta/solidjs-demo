
import { ResponsiveBar } from '@nivo/bar'

const _data = [
  {
    "id": "MON", "tx": 92, "rx": 92,
  },
  {
    "id": "TUR", "rx": 200, "tx": 96,
  },
  {
    "id": "THR", "tx": 43, "rx": 184,
  },
  {
    "id": "WES", "tx": 84, "rx": 50,
  },
  {
    "id": "FRI", "tx": 91, "rx": 133,
  },
  {
    "id": "SAT", "tx": 150, "rx": 50,
  },
  {
    "id": "SUN", "tx": 139, "rx": 99,
  }
]

export const MyResponsiveBar = ({ data, theme }) => (
  <ResponsiveBar
    data={data ?? _data}
    keys={[
      'rx',
      'tx'
    ]}
    theme={theme}
    axisLeft={{ tickValues: 6 }}
    layers={['grid', 'axes', 'bars', '', '']}
    borderRadius={2}
    indexBy="id"
    margin={{ top: 10, right: 5, bottom: 25, left: 50 }}
    padding={0.5}
    colors={{ scheme: 'paired' }}
    enableLabel={false}
    enableGridY={false}

  />
)