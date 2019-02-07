import React from "react";
import { Svg } from 'expo';

const { G, Path, Polygon } = Svg;

export default {
    IconETHViewBox: "0 0 30.7 49.99",
    IconETH: (
        <G><Polygon
            points="15.34 34.53 15.34 34.53 30.69 25.46 15.34 0 15.34 0 15.34 0 15.34 0 15.34 0 0 25.46 15.34 34.53" />
            <Polygon
                points="30.7 28.37 15.34 37.43 15.34 37.43 0 28.37 15.34 49.99 15.34 49.99 30.7 28.37" /></G>
    ),
    IconBTCViewBox: "0 0 49.23 49.23",
    IconBTC: (
        <G><Path
            d="M35,21c.49-3.27-2-5-5.42-6.21l1.11-4.43L28,9.67,26.94,14l-2.16-.51,1.08-4.34-2.7-.68-1.1,4.44-1.73-.41h0l-3.72-.93-.72,2.88s2,.46,2,.49a1.44,1.44,0,0,1,1.26,1.57l-1.26,5.06a1.48,1.48,0,0,1,.28.09l-.28-.07-1.77,7.08a1,1,0,0,1-1.24.64s-2-.49-2-.49l-1.34,3.09,3.51.88,1.93.49-1.12,4.49,2.7.67L19.67,34c.73.2,1.45.39,2.15.56L20.71,39l2.71.67,1.11-4.47c4.61.87,8.07.52,9.53-3.65,1.17-3.35-.06-5.29-2.48-6.55A4.33,4.33,0,0,0,35,21m-6.17,8.66C28,33,22.37,31.19,20.54,30.73L22,24.79c1.83.45,7.7,1.36,6.83,4.86m.83-8.7c-.76,3.05-5.46,1.5-7,1.12l1.35-5.4c1.52.38,6.43,1.09,5.64,4.28m18.8,9.62A24.61,24.61,0,1,1,30.56.74,24.62,24.62,0,0,1,48.49,30.57" /></G>
    ),
    IconCELViewBox: "0 0 30 30",
    IconCEL: (
        <G>
            <Path className="cls-1"
                d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30M15,1.37A13.63,13.63,0,1,0,28.63,15,13.65,13.65,0,0,0,15,1.37m5.92,20.16a.69.69,0,0,0,0-1,.68.68,0,0,0-1,0,7.44,7.44,0,1,1,0-11,.68.68,0,0,0,1,0,.69.69,0,0,0,0-1,8.82,8.82,0,1,0,0,13.06m1.7-11.35a1.29,1.29,0,1,0,1.29,1.29,1.28,1.28,0,0,0-1.29-1.29m.58,1.29a.58.58,0,1,1-.58-.58.58.58,0,0,1,.58.58" />
        </G>
    ),
    IconLTCViewBox: "0 0 50 50",
    IconLTC: (
        <G>
            <Path className="cls-1"
                d="M25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0ZM17.57,25l3.57-13.4h7.73L26.15,21.86l3.78-1.38,0,.09L29,24.16l-3.85,1.4-1.62,6.12H36.39l-1.32,4.91H14.49l2.1-7.89-3,1.08,1-3.7Z" />
        </G>
    ),
    IconXRPViewBox: "0 0 242.4 200",
    IconXRP: (
        <G>
            <Path className="cls-1"
                d="M206.8,200c-2.4-2.47-4.77-5-7.21-7.4-16.2-16.09-32.25-32.31-48.67-48.16-10.17-9.82-22.59-13.55-36.67-11.35a43,43,0,0,0-24.13,12.57q-26.6,26.46-53.27,52.82A16.54,16.54,0,0,0,35.6,200H0l23.94-23.77q15.57-15.48,31.15-30.95c6.66-6.61,13.26-13.29,20.08-19.73a64.88,64.88,0,0,1,25.92-14.82,65.47,65.47,0,0,1,21.58-3c15.83.55,30.2,5.43,42.21,15.93,6.66,5.82,12.78,12.26,19.07,18.48q23.45,23.17,46.82,46.4L242.4,200Z" />
            <Path className="cls-1"
                d="M36.8,0c4.76,4.82,9.47,9.69,14.27,14.47q20,19.83,40,39.57A41.37,41.37,0,0,0,117.4,66c14,1.13,25.6-3.64,35.44-13.5,17.08-17.09,34.3-34,51.46-51,.47-.46.87-1,1.3-1.49h35.2c-1.12,1.27-2.18,2.61-3.38,3.8q-19.53,19.44-39.1,38.83c-10.17,10.07-20.18,20.3-30.57,30.13A65,65,0,0,1,132.5,90.05a68.86,68.86,0,0,1-38.44-4.58c-9.35-4-17-10.17-24.16-17.31C51.05,49.28,32,30.55,13.1,11.76,9.51,8.2,5.9,4.65,2.31,1.08A6.3,6.3,0,0,1,1.6,0Z" />
        </G>
    ),
    IconOMGViewBox: "0 0 200.22 200",
    IconOMG: (
        <G>
            <Path className="cls-1"
                d="M86.45,16.74c1.55,2.54,2.69,4.45,3.87,6.33a48.34,48.34,0,0,1-1.72,54.4C77.19,93.23,57.14,101,38.83,96.75,18.74,92.09,4.12,76.71.89,56.83A48.54,48.54,0,0,1,48.3.21C62.54,0,76.8.46,91,0c6.35-.2,7.18,2.8,7.1,7.91s-.07,9.49-7.11,8.49A24.26,24.26,0,0,0,86.45,16.74ZM81.21,49.22c.12-18.32-13.84-32.68-31.89-32.81a31.94,31.94,0,0,0-32.48,32.2c-.07,18.33,13.79,32.67,31.87,33C66.53,81.85,81.1,67.36,81.21,49.22Z" />
            <Path className="cls-1"
                d="M151.55.19a49,49,0,0,1,48.67,48.72c0,26.74-22.38,49-49.34,48.87-26.54-.09-48.72-22.36-48.64-48.85A49,49,0,0,1,151.55.19Zm31.83,48.75c0-18.25-14.15-32.56-32.16-32.53A32,32,0,0,0,119,48.9a32.31,32.31,0,0,0,32.19,32.67C169.13,81.6,183.37,67.16,183.38,48.94Z" />
            <Path className="cls-1"
                d="M48.78,200A49.06,49.06,0,0,1,0,151.38c-.15-26.69,22.32-49,49.25-49,26.54.07,48.7,22.22,48.76,48.75C98.08,178.05,75.9,200.05,48.78,200ZM16.84,151.06c-.09,18.29,13.91,32.64,31.93,32.74a32,32,0,0,0,32.44-32.28c.08-18.24-14-32.69-32-32.89A32.19,32.19,0,0,0,16.84,151.06Z" />
        </G>
    ),
    IconXLMViewBox: "0 0 39.06 49",
    IconXLM: (
        <G>
            <Path className="cls-1"
                d="M6.88,39l.5.36L.5,49,0,48.64ZM3.94,47.41l4-5.69.5.35-4,5.69ZM38.82,5c.43,3.07.65,8.83-2.64,12.91-1.8,2.23-3.6,4.38-5.2,6.27,1.58,2.8,2.39,7.26-1.53,13.39-.19.31-.57.56-.6-.08a11,11,0,0,0-3.21-7.13l-.15.19a3.1,3.1,0,0,1-.85.73,1.82,1.82,0,0,1-.94.26h-.05a3.62,3.62,0,0,1-1.92-.81l0,0-1-.67-2.79-2L17.86,28l-2.49-1.76-.16-.12L14,25.32l-.13-.1a3.54,3.54,0,0,1-1.32-1.47,2.42,2.42,0,0,1,.31-2.07l.07-.12A11.19,11.19,0,0,0,5.2,21c-.62.19-.51-.25-.28-.54C9.34,14.79,13.78,13.93,17,14.4c1.24-2.17,2.66-4.62,4.15-7.08A13.21,13.21,0,0,1,26.34,2.6a22.45,22.45,0,0,1,6-2.14A23.1,23.1,0,0,1,35.54,0c1.45-.08,1.7.11,1.83.19h0c.13.09.38.3.78,1.67A21.5,21.5,0,0,1,38.82,5ZM25.64,28.55,24.55,29.8c-.6.71-.95.79-2.16-.06L18.66,27.1l-.1-.07-2.48-1.76-1.35-.95a2.74,2.74,0,0,1-1-1c-.06-.17-.1-.45.23-1l.81-1.44C16.14,18.36,19,13.18,22.18,8,24.14,4.7,27.79,3,30.5,2.2a21.58,21.58,0,0,1,5.73-1h.41a19.73,19.73,0,0,1,1.17,6.14c.14,2.84-.2,6.85-2.58,9.81C31.39,22,27.5,26.41,25.64,28.55m-3.91,2.22a5.38,5.38,0,0,1-.51.94l-.12.15c-2.83,3.92-6.82,5.85-9,4.3s-1.72-6,1-10c0-.05.07-.11.11-.17a4.4,4.4,0,0,1,.7-.79l.13.1,1.18.83.16.12L17.86,28l.09.06,2.79,2,1,.67,0,0M31.46,7.65a5,5,0,1,0,1.19,6.91,4.93,4.93,0,0,0-1.19-6.91m.19,6.2A3.73,3.73,0,1,1,28,8a4.74,4.74,0,0,1,.65,0,3.73,3.73,0,0,1,3,5.88" />
        </G>
    ),
    IconBCHViewBox: "0 0 55 34.36",
    IconBCH: (
        <G>
            <Path className="cls-1"
                d="M39.46,5A16.76,16.76,0,0,0,15.52,5a17.4,17.4,0,0,0,0,24.31,16.78,16.78,0,0,0,23.94,0A17.4,17.4,0,0,0,39.46,5ZM31.38,23.66l.77,3.13-1.86.46-.77-3.09c-.48.12-1,.25-1.49.36l.77,3.11-1.87.46L26.17,25l-1.32.32-2.42.61-.19-2.34s1.36-.31,1.36-.34a.69.69,0,0,0,.54-.8l-1.21-4.95.21-.05a1.52,1.52,0,0,0-.21,0l-.87-3.53a1,1,0,0,0-1.27-.56s-1.34.33-1.34.33l-.5-2L21.52,11v0l1.17-.31-.76-3.09,1.86-.47.74,3L26,9.81l-.74-3,1.86-.47.76,3.09c2.44-.39,4.53-.13,5.29,2.05a3,3,0,0,1-.82,3.59c1.88,0,3.26.77,3.63,3.22C36.45,21.33,34.45,22.69,31.38,23.66Z" />
            <Path className="cls-1" d="M27.53,22.21l-1-4.15c1.26-.3,5.12-1.66,5.71.76S28.78,21.89,27.53,22.21Z" />
            <Path className="cls-1" d="M26.06,16.18l-.93-3.76c1-.28,4.24-1.45,4.8.78S27.1,15.92,26.06,16.18Z" />
            <Path className="cls-1"
                d="M55,0V34.36H39.34a20.74,20.74,0,0,0,6.45-7.46,21.25,21.25,0,0,0,0-19.39A20.93,20.93,0,0,0,39.29,0Z" />
            <Path className="cls-1"
                d="M15.68,34.36H0V0H15.71A21.08,21.08,0,0,0,6.87,17.18a21.25,21.25,0,0,0,2.34,9.7A20.76,20.76,0,0,0,15.68,34.36Z" />
        </G>
    ),
    IconZRXViewBox: "0 0 38.79 38.77",
    IconZRX: (
        <G>
            <Path className="cls-1"
                d="M21.47,27.38c.89.95,1.79,1.87,2.64,2.83a.85.85,0,0,0,1.25.17,12.78,12.78,0,0,0,4.28-3.86c.07-.1.16-.19.3-.36.29.36.57.69.83,1,1,1.39,2.06,2.78,3.11,4.15a.6.6,0,0,1,0,.92,19.43,19.43,0,0,1-10,5.94,18.11,18.11,0,0,1-5.38.54,19.79,19.79,0,0,1-8.36-2.38,2.33,2.33,0,0,1-.31-.26Z" />
            <Path className="cls-1"
                d="M2.58,9.83,6,14.24c1.62,2.13,3.24,4.27,4.88,6.38.39.49.42.8-.07,1.24-.81.74-1.53,1.57-2.32,2.33a.72.72,0,0,0-.13,1,13,13,0,0,0,3.75,4.3l.55.44c-.62.48-1.18.92-1.75,1.34-1.14.87-2.3,1.72-3.44,2.58a.59.59,0,0,1-.88,0,19.3,19.3,0,0,1-5.8-9.37,18.37,18.37,0,0,1-.71-6,19.9,19.9,0,0,1,2.15-8C2.29,10.31,2.41,10.12,2.58,9.83Z" />
            <Path className="cls-1"
                d="M29,2.62,26.63,4.36c-2.93,2.1-5.87,4.19-8.78,6.3a.69.69,0,0,1-1.1-.09c-.7-.75-1.48-1.44-2.2-2.18a.66.66,0,0,0-.93-.12A12.89,12.89,0,0,0,9.34,12c-.13.18-.28.36-.5.63-.41-.53-.79-1-1.16-1.52-.94-1.24-1.86-2.5-2.8-3.74a.53.53,0,0,1,0-.81A19.38,19.38,0,0,1,15.14.5,18.92,18.92,0,0,1,28.46,2.28,5.25,5.25,0,0,1,29,2.62Z" />
            <Path className="cls-1"
                d="M36.21,28.77c-.75-1-1.45-1.93-2.16-2.86-2-2.61-3.94-5.22-5.94-7.8-.4-.52-.4-.84.1-1.3.76-.69,1.42-1.49,2.16-2.21a.73.73,0,0,0,.13-1,13,13,0,0,0-3.72-4.32l-.62-.46c.86-.66,1.65-1.29,2.46-1.89s1.91-1.39,2.84-2.11a.49.49,0,0,1,.75,0A19.2,19.2,0,0,1,38,14.09a18.47,18.47,0,0,1,.76,6,19.45,19.45,0,0,1-2.35,8.43A1.91,1.91,0,0,1,36.21,28.77Z" />
        </G>
    ),
    IconBTGViewBox: "0 0 50 50",
    IconBTG: (
        <G>
            <Path className="cls-1" d="M25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0Zm0,39.26A14.26,14.26,0,1,1,39.26,25,14.27,14.27,0,0,1,25,39.26ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22ZM25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22Z" />
            <Path className="cls-1" d="M25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22Z" />
            <Path className="cls-1" d="M25,12.5A12.7,12.7,0,1,0,37.7,25.2,12.7,12.7,0,0,0,25,12.5Zm-1.17,1.43A11.46,11.46,0,0,1,25,13.87h.59v3.31H23.83ZM26,19.53c.35,0,2.73.29,2.73,2.15s-2.34,2.15-2.93,2.15H24v-4.3Zm-4.3-2.34H17.77c-.21,0-.58,0-.58.39v1.56c0,.33.1.39.39.39h2.15a.58.58,0,0,1,.58.59v10a.58.58,0,0,1-.58.58H18.36a.89.89,0,0,0-1,.79c-.23,1.09-.32,1.75.2,1.75h4.1V36a11.33,11.33,0,0,1,0-21.67Zm3.91,19.32H25a11.46,11.46,0,0,1-1.17-.06V33.2h1.76Zm.19-5.85H24V26h2.15c.85,0,3.52.06,3.52,2.14C29.69,30.76,26.33,30.66,25.78,30.66Zm2,5.53c0-.44,0-1.82,0-3,3.85,0,6.25-1.56,6.25-5.08s-2.93-3.71-2.93-3.71a3.33,3.33,0,0,0,1.76-2.93c0-4.13-5.27-4.29-5.27-4.29v-3a11.33,11.33,0,0,1,.2,22Z" />
        </G>
    ),
    IconZECViewBox: "0 0 50 50",
    IconZEC: (
        <G>
            <Path className="cls-1" d="M23.59,31h9.84v5.23H27.37c.1,1.5.15,2.89.25,4.38H22.53V36.3H16.47a27.86,27.86,0,0,1,.1-5c.15-.86,1.06-1.61,1.62-2.35q2.88-3.6,5.8-7.16c.76-.91,1.51-1.77,2.37-2.78H16.92V13.76h5.61V9.38h4.89v4.27h6.11a28.32,28.32,0,0,1-.1,5.07c-.16.86-1.06,1.61-1.67,2.35q-2.88,3.6-5.8,7.16C25.2,29.18,24.41,30.11,23.59,31Z" />
        </G>
    ),
}