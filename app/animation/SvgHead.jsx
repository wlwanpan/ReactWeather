var React = require('react');

var SvgHead = React.createClass({

    render: function () {
        return (
            <g fill="none">
                <path id="head-mouth" stroke="#000000" strokeWidth=".5" d="M19.94 45.08c6.84 1.9 13.46 2.06 19.8-.05"/>
                <g id="head-hair" stroke="#191919">
                  <g id="head-hair-right">
                    <path id="path4518" d="M42.48 8.03c-2.8-3.1-5.76-7-11.06-4.63 6.5-3.75 10.58.37 14.84 5.86"/>
                    <path id="path4520" d="M31.42 3.3c12.92-6.4 16.82 6.9 17.77 7.85"/>
                    <path id="path4522" d="M31.7 2.27C40.14-1.7 46.4 1.1 50.8 9.74"/>
                  </g>
                  <g id="head-hair-left">
                    <path id="path4518-9" d="M17.15 8.03c2.8-3.1 5.76-7 11.06-4.63-6.5-3.76-10.57.37-14.83 5.86"/>
                    <path id="path4520-7" d="M28.2 3.3c-12.9-6.4-16.8 6.88-17.76 7.85"/>
                    <path id="path4522-4" d="M27.93 2.26C19.5-1.7 13.23 1.1 8.83 9.73"/>
                  </g>
                </g>
                <g id="head-google">
                    <path id="head-google-6" stroke="#999999" strokeWidth="3" d="M40.12 16.3a10.06 10.1 0 0 0-10.06 10.12 10.06 10.1 0 0 0 10.06 10.1 10.06 10.1 0 0 0 10.06-10.1 10.06 10.1 0 0 0-10.06-10.1zm-20.74.1A10.06 10.1 0 0 0 9.3 26.5 10.06 10.1 0 0 0 19.4 36.63a10.06 10.1 0 0 0 10.06-10.1A10.06 10.1 0 0 0 19.38 16.4z"/>
                    <g id="head-google-left">
                        <path id="google-frame-left" fill="#252525" stroke="#252525" d="M63.08 117.63h3.9v4.9h-3.9z" transform="matrix(1.117 0 0 .99058 -66.743 -92.8)"/>
                        <path id="rect4678-left" fill="#999999" stroke="#999999" strokeWidth="1.21" d="M66.4 116.83h1.35v6.34H66.4z" transform="matrix(1.117 0 0 .99058 -66.743 -92.8)"/>
                        <path id="path4680-left" stroke="#000000" d="M63.13 120.06h2.1" transform="matrix(1.117 0 0 .99058 -66.743 -92.8)"/>
                    </g>
                    <g id="head-google-right">
                        <path id="google-frame-right" fill="#252525" stroke="#252525" d="M63.08 117.63h3.9v4.9h-3.9z" transform="matrix(-1.12958 0 0 .98958 127.48 -92.545)"/>
                        <path id="rect4678-right" fill="#999999" stroke="#999999" strokeWidth="1.21" d="M66.4 116.83h1.35v6.34H66.4z" transform="matrix(-1.12958 0 0 .98958 127.48 -92.545)"/>
                        <path id="path4680-right" stroke="#000000" d="M63.13 120.06l2.12-.02" transform="matrix(-1.12958 0 0 .98958 127.48 -92.545)"/>
                    </g>
                </g>
                <g id="head-eyes">
                    <g id="head-eye-retina" fill="#ffffff" transform="translate(-59.385 -93.93)">
                        <ellipse id="path4559" cx="78.62" cy="120.39" rx="8.79" ry="7.27"/>
                        <ellipse id="path4559-8" cx="-99.41" cy="120.3" rx="8.78" ry="7.37" transform="scale(-1 1)"/>
                    </g>
                    <g id="g4616" transform="translate(-59.385 -93.93)">
                        <circle id="head-eye-left" cx="81.38" cy="120.67" r="3.28" fill="#966a5c" strokeWidth="5.18"/>
                        <circle id="path4579" cx="81.29" cy="120.77" r="1.17" fill="#000000"/>
                    </g>
                    <g id="g4620" transform="translate(-59.385 -93.93)">
                        <circle id="head-eye-right" cx="97.14" cy="120.67" r="3.28" fill="#966a5c" strokeWidth="5.18"/>
                        <circle id="path4579-5" cx="97.05" cy="120.73" r="1.17" fill="#000000"/>
                    </g>
                </g>
            </g>
        )
    }
});

module.exports = SvgHead;
