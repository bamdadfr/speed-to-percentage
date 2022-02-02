![release](https://img.shields.io/github/v/release/bamdadsabbagh/speed-to-percentage)
![license](https://img.shields.io/github/license/bamdadsabbagh/speed-to-percentage)
![maintainability](https://img.shields.io/codeclimate/maintainability/bamdadsabbagh/speed-to-percentage)
![coverage](https://img.shields.io/codeclimate/coverage/bamdadsabbagh/speed-to-percentage)
![snyk](https://img.shields.io/snyk/vulnerabilities/github/bamdadsabbagh/speed-to-percentage)

Convert the audio playback speed to percentage.

Normal playback speed is 1, meaning the audio is played at the normal speed.

## 🚀 Use

```bash
yarn add speed-to-percentage
```

### ⚡ Example

```javascript
import speedToPercentage from 'speed-to-percentage'

const half = speedToPercentage(0.5) // returns the string -50
const moreDigits = speedToPercentage(0.5, 2) // returns the string -50.00
```
