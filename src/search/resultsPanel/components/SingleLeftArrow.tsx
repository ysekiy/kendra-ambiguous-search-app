// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import * as React from "react";

interface OwnProps {
  className?: string;
}

export class SingleLeftArrow extends React.Component<OwnProps> {
  render() {
    return (
      <svg
        width="7px"
        height="12px"
        viewBox="0 0 7 12"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={this.props.className}
      >
        <desc>Created with Sketch.</desc>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            id="26"
            transform="translate(-151.000000, -272.000000)"
            stroke="#AAB7B8"
            strokeWidth="2"
          >
            <polyline
              id="1-icon"
              transform="translate(154.500000, 278.000000) scale(-1, 1) translate(-154.500000, -278.000000) "
              points="152 273 157 278 152 283"
            />
          </g>
        </g>
      </svg>
    );
  }
}

export default SingleLeftArrow;
