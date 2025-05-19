/**
 * Simulated color sensor for Sphero RVR+
 */
//% weight=100 color=#29ABE2 icon="🌈"
//% block="RVR+ Color"
namespace RVRColorSensor {

    let fakeColor = 0

    //% block="get RVR+ color code"
    export function getColor(): number {
        return fakeColor
    }

    //% block="set RVR+ color code to %color"
    export function setColor(color: number): void {
        fakeColor = color
    }
}
