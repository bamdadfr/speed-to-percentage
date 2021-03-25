# speed-to-percentage

> calculate percentage from audio speed
>
> playback speed of 1 (default) will return percentage of 0% (pitch)

<p>
    <a href="https://github.com/bamdadsabbagh/speed-to-percentage">
        <img alt="github stars" src="https://img.shields.io/github/stars/bamdadsabbagh/speed-to-percentage">
    </a>
    <img alt="license" src="https://img.shields.io/github/license/bamdadsabbagh/speed-to-percentage">
</p>

<p>
    <img alt="languages used" src="https://img.shields.io/github/languages/count/bamdadsabbagh/speed-to-percentage">
    <img alt="language most used" src="https://img.shields.io/github/languages/top/bamdadsabbagh/speed-to-percentage">
</p>

<p>
    <img alt="release version" src="https://img.shields.io/github/v/release/bamdadsabbagh/speed-to-percentage">
    <img alt="code climate" src="https://api.codeclimate.com/v1/badges/d1c7faab9a4f50ad5b03/maintainability" />
    <img alt="codecov" src="https://img.shields.io/codecov/c/github/bamdadsabbagh/speed-to-percentage">
</p>

<p>
    <img alt="dependencies" src="https://img.shields.io/david/bamdadsabbagh/speed-to-percentage">
    <img alt="dev dependencies" src="https://img.shields.io/david/dev/bamdadsabbagh/speed-to-percentage">
    <img alt="snyk vulnerabilities" src="https://img.shields.io/snyk/vulnerabilities/github/bamdadsabbagh/speed-to-percentage">
</p>

## installation

```bash
# npm
npm install speed-to-percentage

# yarn
yarn add speed-to-percentage
```

## parameters

1. `speed` number
2. `digits` number, optional, between `0` and `20`

## examples

### as `default` export

```javascript
import speedToPercentage from 'speed-to-percentage'

const semitones = speedToPercentage(0.5) // returns "-50"
```

### as `named` export

```javascript
import {speedToPercentage} from 'speed-to-percentage'

const semitones = speedToPercentage(1.5, 3) // returns "50.000"
```
