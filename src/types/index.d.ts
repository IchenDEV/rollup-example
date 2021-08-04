interface SvgrComponent extends React.Component<React.SVGAttributes<SVGElement>> {}
declare module '*.svg' {
    const value: SvgrComponent;
    export default value;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'