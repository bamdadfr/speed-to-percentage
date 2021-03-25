const speedToPercentage = require ('../src/index')

describe ('testing parameters', () => {

    it ('should accept a number as speed parameter', () => {

        expect (
            speedToPercentage (1),
        )
            .toBeDefined ()

    })

    it ('should refuse a string as speed parameter', () => {

        expect (() => {

            speedToPercentage ('string')

        })
            .toThrowError ()

    })

    it ('should accept a number as digits parameter', () => {

        expect (
            speedToPercentage (1, 1),
        )
            .toBeDefined ()

    })

    it ('should refuse a string as digits parameter', () => {

        expect (() => {

            speedToPercentage (1, 'string')

        })
            .toThrowError ()

    })

    it ('should refuse a number lower than 0 as digits parameter', () => {

        expect (() => {

            speedToPercentage (1, -1)

        })
            .toThrowError ()

    })

    it ('should refuse a number higher than 20 as digits parameter', () => {

        expect (() => {

            speedToPercentage (1, 21)

        })
            .toThrowError ()

    })

})

describe ('testing return values', () => {

    it ('should return 0 % if speed is 1', () => {

        expect (
            speedToPercentage (1),
        )
            .toBe ('0')

    })

    it ('should return -50 % if speed is 0.5', () => {

        expect (
            speedToPercentage (0.5),
        )
            .toBe ('-50')

    })

    it ('should return 50 % if speed is 1.5', () => {

        expect (
            speedToPercentage (1.5),
        )
            .toBe ('50')

    })

    it ('should return 50.000 % if speed is 1.5 and digits is 3', () => {

        expect (
            speedToPercentage (1.5, 3),
        )
            .toBe ('50.000')

    })

})
