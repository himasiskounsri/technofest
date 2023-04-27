import { Box, Icon, IconProps } from "@chakra-ui/react";
import React from "react";

interface CircuitProps extends IconProps {}

const Circuit: React.FC<CircuitProps> = (props) => {
  return (
    <Icon
      width="500"
      zoomAndPan="magnify"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 375 374.999991"
      height="500"
      {...props}
    >
      <g clipPath="url(#6a12e5b68b)">
        <path
          d="M 208.496094 318.460938 C 204.523438 318.460938 201.289062 315.226562 201.289062 311.253906 C 201.289062 307.277344 204.523438 304.042969 208.496094 304.042969 C 212.46875 304.042969 215.703125 307.277344 215.703125 311.253906 C 215.703125 315.226562 212.46875 318.460938 208.496094 318.460938 Z M 208.496094 306.375 C 205.808594 306.375 203.625 308.558594 203.625 311.25 C 203.625 313.9375 205.808594 316.125 208.496094 316.125 C 211.183594 316.125 213.367188 313.9375 213.367188 311.25 C 213.367188 308.558594 211.183594 306.375 208.496094 306.375 Z M 208.496094 306.375 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#ffc36333ff)">
        <path
          d="M 355.675781 71.148438 C 351.703125 71.148438 348.46875 67.914062 348.46875 63.9375 C 348.46875 59.960938 351.703125 56.726562 355.675781 56.726562 C 359.648438 56.726562 362.878906 59.960938 362.878906 63.9375 C 362.878906 67.914062 359.648438 71.148438 355.675781 71.148438 Z M 355.675781 59.058594 C 352.988281 59.058594 350.804688 61.246094 350.804688 63.933594 C 350.804688 66.625 352.988281 68.8125 355.675781 68.8125 C 358.363281 68.8125 360.546875 66.625 360.546875 63.933594 C 360.546875 61.246094 358.363281 59.058594 355.675781 59.058594 Z M 355.675781 59.058594 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <path
        d="M 367.753906 141.265625 C 363.777344 141.265625 360.546875 138.03125 360.546875 134.054688 C 360.546875 130.078125 363.777344 126.84375 367.753906 126.84375 C 371.726562 126.84375 374.957031 130.078125 374.957031 134.054688 C 374.957031 138.03125 371.726562 141.265625 367.753906 141.265625 Z M 367.753906 129.175781 C 365.066406 129.175781 362.878906 131.363281 362.878906 134.050781 C 362.878906 136.742188 365.066406 138.929688 367.753906 138.929688 C 370.4375 138.929688 372.625 136.742188 372.625 134.050781 C 372.625 131.363281 370.4375 129.175781 367.753906 129.175781 Z M 367.753906 129.175781 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 314.945312 307.492188 C 310.972656 307.492188 307.742188 304.257812 307.742188 300.28125 C 307.742188 296.304688 310.972656 293.070312 314.945312 293.070312 C 318.921875 293.070312 322.152344 296.304688 322.152344 300.28125 C 322.152344 304.257812 318.921875 307.492188 314.945312 307.492188 Z M 314.945312 295.402344 C 312.261719 295.402344 310.074219 297.589844 310.074219 300.277344 C 310.074219 302.96875 312.261719 305.152344 314.945312 305.152344 C 317.632812 305.152344 319.820312 302.96875 319.820312 300.277344 C 319.820312 297.589844 317.632812 295.402344 314.945312 295.402344 Z M 314.945312 295.402344 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 269.578125 287.695312 C 269.578125 288.09375 269.539062 288.484375 269.460938 288.875 C 269.382812 289.265625 269.269531 289.640625 269.117188 290.007812 C 268.964844 290.375 268.78125 290.722656 268.558594 291.054688 C 268.339844 291.382812 268.089844 291.6875 267.808594 291.96875 C 267.527344 292.25 267.222656 292.5 266.894531 292.71875 C 266.5625 292.941406 266.214844 293.125 265.847656 293.277344 C 265.484375 293.429688 265.105469 293.546875 264.714844 293.621094 C 264.328125 293.699219 263.933594 293.738281 263.539062 293.738281 C 263.140625 293.738281 262.75 293.699219 262.359375 293.621094 C 261.972656 293.546875 261.59375 293.429688 261.226562 293.277344 C 260.863281 293.125 260.511719 292.941406 260.183594 292.71875 C 259.855469 292.5 259.550781 292.25 259.269531 291.96875 C 258.988281 291.6875 258.738281 291.382812 258.519531 291.054688 C 258.296875 290.722656 258.109375 290.375 257.960938 290.007812 C 257.808594 289.640625 257.691406 289.265625 257.617188 288.875 C 257.539062 288.484375 257.5 288.09375 257.5 287.695312 C 257.5 287.300781 257.539062 286.90625 257.617188 286.515625 C 257.691406 286.128906 257.808594 285.75 257.960938 285.382812 C 258.109375 285.015625 258.296875 284.667969 258.519531 284.339844 C 258.738281 284.007812 258.988281 283.703125 259.269531 283.421875 C 259.550781 283.140625 259.855469 282.890625 260.183594 282.671875 C 260.511719 282.449219 260.863281 282.265625 261.226562 282.113281 C 261.59375 281.960938 261.972656 281.847656 262.359375 281.769531 C 262.75 281.691406 263.140625 281.652344 263.539062 281.652344 C 263.933594 281.652344 264.328125 281.691406 264.714844 281.769531 C 265.105469 281.847656 265.484375 281.960938 265.847656 282.113281 C 266.214844 282.265625 266.5625 282.449219 266.894531 282.671875 C 267.222656 282.890625 267.527344 283.140625 267.808594 283.421875 C 268.089844 283.703125 268.339844 284.007812 268.558594 284.339844 C 268.78125 284.667969 268.964844 285.015625 269.117188 285.382812 C 269.269531 285.75 269.382812 286.128906 269.460938 286.515625 C 269.539062 286.90625 269.578125 287.300781 269.578125 287.695312 Z M 269.578125 287.695312 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 218.328125 178.863281 C 218.328125 179.257812 218.289062 179.652344 218.210938 180.039062 C 218.132812 180.429688 218.019531 180.808594 217.867188 181.175781 C 217.714844 181.542969 217.53125 181.890625 217.308594 182.21875 C 217.089844 182.550781 216.839844 182.855469 216.558594 183.136719 C 216.277344 183.414062 215.972656 183.667969 215.644531 183.886719 C 215.3125 184.105469 214.964844 184.292969 214.597656 184.445312 C 214.234375 184.597656 213.855469 184.710938 213.464844 184.789062 C 213.078125 184.867188 212.683594 184.90625 212.289062 184.90625 C 211.890625 184.90625 211.5 184.867188 211.109375 184.789062 C 210.722656 184.710938 210.34375 184.597656 209.976562 184.445312 C 209.609375 184.292969 209.261719 184.105469 208.933594 183.886719 C 208.601562 183.667969 208.296875 183.414062 208.019531 183.136719 C 207.738281 182.855469 207.488281 182.550781 207.265625 182.21875 C 207.046875 181.890625 206.859375 181.542969 206.707031 181.175781 C 206.558594 180.808594 206.441406 180.429688 206.367188 180.039062 C 206.289062 179.652344 206.25 179.257812 206.25 178.863281 C 206.25 178.464844 206.289062 178.070312 206.367188 177.683594 C 206.441406 177.292969 206.558594 176.914062 206.707031 176.550781 C 206.859375 176.183594 207.046875 175.835938 207.265625 175.503906 C 207.488281 175.175781 207.738281 174.871094 208.019531 174.589844 C 208.296875 174.308594 208.601562 174.058594 208.933594 173.835938 C 209.261719 173.617188 209.609375 173.429688 209.976562 173.277344 C 210.34375 173.128906 210.722656 173.011719 211.109375 172.933594 C 211.5 172.859375 211.890625 172.820312 212.289062 172.820312 C 212.683594 172.820312 213.078125 172.859375 213.464844 172.933594 C 213.855469 173.011719 214.234375 173.128906 214.597656 173.277344 C 214.964844 173.429688 215.3125 173.617188 215.644531 173.835938 C 215.972656 174.058594 216.277344 174.308594 216.558594 174.589844 C 216.839844 174.871094 217.089844 175.175781 217.308594 175.503906 C 217.53125 175.835938 217.714844 176.183594 217.867188 176.550781 C 218.019531 176.914062 218.132812 177.292969 218.210938 177.683594 C 218.289062 178.070312 218.328125 178.464844 218.328125 178.863281 Z M 218.328125 178.863281 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 319.710938 96.734375 C 319.710938 97.132812 319.671875 97.523438 319.59375 97.914062 C 319.515625 98.300781 319.402344 98.679688 319.25 99.046875 C 319.097656 99.414062 318.914062 99.761719 318.691406 100.089844 C 318.472656 100.421875 318.222656 100.726562 317.941406 101.007812 C 317.660156 101.289062 317.355469 101.539062 317.027344 101.757812 C 316.695312 101.980469 316.347656 102.164062 315.984375 102.316406 C 315.617188 102.46875 315.238281 102.582031 314.851562 102.660156 C 314.460938 102.738281 314.070312 102.777344 313.671875 102.777344 C 313.277344 102.777344 312.882812 102.738281 312.492188 102.660156 C 312.105469 102.582031 311.726562 102.46875 311.359375 102.316406 C 310.996094 102.164062 310.648438 101.980469 310.316406 101.757812 C 309.988281 101.539062 309.683594 101.289062 309.402344 101.007812 C 309.121094 100.726562 308.871094 100.421875 308.652344 100.089844 C 308.429688 99.761719 308.246094 99.414062 308.09375 99.046875 C 307.941406 98.679688 307.828125 98.300781 307.75 97.914062 C 307.671875 97.523438 307.632812 97.132812 307.632812 96.734375 C 307.632812 96.335938 307.671875 95.945312 307.75 95.554688 C 307.828125 95.167969 307.941406 94.789062 308.09375 94.421875 C 308.246094 94.054688 308.429688 93.707031 308.652344 93.378906 C 308.871094 93.046875 309.121094 92.742188 309.402344 92.460938 C 309.683594 92.179688 309.988281 91.929688 310.316406 91.710938 C 310.648438 91.488281 310.996094 91.304688 311.359375 91.152344 C 311.726562 91 312.105469 90.886719 312.492188 90.808594 C 312.882812 90.730469 313.277344 90.691406 313.671875 90.691406 C 314.070312 90.691406 314.460938 90.730469 314.851562 90.808594 C 315.238281 90.886719 315.617188 91 315.984375 91.152344 C 316.347656 91.304688 316.695312 91.488281 317.027344 91.710938 C 317.355469 91.929688 317.660156 92.179688 317.941406 92.460938 C 318.222656 92.742188 318.472656 93.046875 318.691406 93.378906 C 318.914062 93.707031 319.097656 94.054688 319.25 94.421875 C 319.402344 94.789062 319.515625 95.167969 319.59375 95.554688 C 319.671875 95.945312 319.710938 96.335938 319.710938 96.734375 Z M 319.710938 96.734375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 7.226562 194.804688 C 3.253906 194.804688 0.0234375 191.570312 0.0234375 187.59375 C 0.0234375 183.617188 3.253906 180.382812 7.226562 180.382812 C 11.199219 180.382812 14.433594 183.617188 14.433594 187.59375 C 14.433594 191.570312 11.199219 194.804688 7.226562 194.804688 Z M 7.226562 182.714844 C 4.539062 182.714844 2.355469 184.902344 2.355469 187.589844 C 2.355469 190.28125 4.539062 192.464844 7.226562 192.464844 C 9.914062 192.464844 12.097656 190.28125 12.097656 187.589844 C 12.097656 184.902344 9.914062 182.714844 7.226562 182.714844 Z M 7.226562 182.714844 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 10.449219 187.59375 C 10.449219 188.019531 10.367188 188.433594 10.203125 188.828125 C 10.039062 189.222656 9.804688 189.570312 9.503906 189.871094 C 9.203125 190.175781 8.855469 190.40625 8.460938 190.570312 C 8.066406 190.734375 7.65625 190.816406 7.226562 190.816406 C 6.800781 190.816406 6.390625 190.734375 5.996094 190.570312 C 5.601562 190.40625 5.25 190.175781 4.949219 189.871094 C 4.648438 189.570312 4.414062 189.222656 4.25 188.828125 C 4.089844 188.433594 4.007812 188.019531 4.007812 187.59375 C 4.007812 187.167969 4.089844 186.753906 4.25 186.359375 C 4.414062 185.964844 4.648438 185.617188 4.949219 185.316406 C 5.25 185.011719 5.601562 184.78125 5.996094 184.617188 C 6.390625 184.453125 6.800781 184.371094 7.226562 184.371094 C 7.65625 184.371094 8.066406 184.453125 8.460938 184.617188 C 8.855469 184.78125 9.203125 185.011719 9.503906 185.316406 C 9.804688 185.617188 10.039062 185.964844 10.203125 186.359375 C 10.367188 186.753906 10.449219 187.167969 10.449219 187.59375 Z M 10.449219 187.59375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 352.097656 225.292969 C 348.125 225.292969 344.894531 222.058594 344.894531 218.082031 C 344.894531 214.105469 348.125 210.871094 352.097656 210.871094 C 356.070312 210.871094 359.304688 214.105469 359.304688 218.082031 C 359.304688 222.058594 356.070312 225.292969 352.097656 225.292969 Z M 352.097656 213.203125 C 349.410156 213.203125 347.226562 215.390625 347.226562 218.078125 C 347.226562 220.765625 349.410156 222.953125 352.097656 222.953125 C 354.785156 222.953125 356.96875 220.765625 356.96875 218.078125 C 356.96875 215.390625 354.785156 213.203125 352.097656 213.203125 Z M 352.097656 213.203125 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 355.320312 218.082031 C 355.320312 218.507812 355.238281 218.917969 355.074219 219.3125 C 354.910156 219.707031 354.675781 220.058594 354.375 220.359375 C 354.074219 220.660156 353.726562 220.894531 353.332031 221.058594 C 352.9375 221.222656 352.523438 221.304688 352.097656 221.304688 C 351.671875 221.304688 351.261719 221.222656 350.867188 221.058594 C 350.472656 220.894531 350.121094 220.660156 349.820312 220.359375 C 349.519531 220.058594 349.285156 219.707031 349.121094 219.3125 C 348.960938 218.917969 348.878906 218.507812 348.878906 218.082031 C 348.878906 217.652344 348.960938 217.242188 349.121094 216.847656 C 349.285156 216.453125 349.519531 216.105469 349.820312 215.800781 C 350.121094 215.5 350.472656 215.265625 350.867188 215.101562 C 351.261719 214.9375 351.671875 214.859375 352.097656 214.859375 C 352.523438 214.859375 352.9375 214.9375 353.332031 215.101562 C 353.726562 215.265625 354.074219 215.5 354.375 215.800781 C 354.675781 216.105469 354.910156 216.453125 355.074219 216.847656 C 355.238281 217.242188 355.320312 217.652344 355.320312 218.082031 Z M 355.320312 218.082031 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 248.582031 144.488281 C 244.609375 144.488281 241.375 141.253906 241.375 137.277344 C 241.375 133.300781 244.609375 130.066406 248.582031 130.066406 C 252.554688 130.066406 255.789062 133.300781 255.789062 137.277344 C 255.789062 141.253906 252.554688 144.488281 248.582031 144.488281 Z M 248.582031 132.398438 C 245.894531 132.398438 243.710938 134.585938 243.710938 137.277344 C 243.710938 139.964844 245.894531 142.152344 248.582031 142.152344 C 251.269531 142.152344 253.453125 139.964844 253.453125 137.277344 C 253.453125 134.585938 251.269531 132.398438 248.582031 132.398438 Z M 248.582031 132.398438 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 251.800781 137.277344 C 251.800781 137.707031 251.722656 138.117188 251.558594 138.511719 C 251.394531 138.90625 251.160156 139.253906 250.859375 139.558594 C 250.558594 139.859375 250.207031 140.09375 249.8125 140.257812 C 249.417969 140.417969 249.007812 140.5 248.582031 140.5 C 248.15625 140.5 247.742188 140.417969 247.347656 140.257812 C 246.953125 140.09375 246.605469 139.859375 246.304688 139.558594 C 246.003906 139.253906 245.769531 138.90625 245.605469 138.511719 C 245.441406 138.117188 245.359375 137.707031 245.359375 137.277344 C 245.359375 136.851562 245.441406 136.441406 245.605469 136.046875 C 245.769531 135.648438 246.003906 135.300781 246.304688 135 C 246.605469 134.699219 246.953125 134.464844 247.347656 134.300781 C 247.742188 134.136719 248.15625 134.054688 248.582031 134.054688 C 249.007812 134.054688 249.417969 134.136719 249.8125 134.300781 C 250.207031 134.464844 250.558594 134.699219 250.859375 135 C 251.160156 135.300781 251.394531 135.648438 251.558594 136.046875 C 251.722656 136.441406 251.800781 136.851562 251.800781 137.277344 Z M 251.800781 137.277344 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 87.9375 189.136719 L 13.265625 189.136719 L 13.265625 186.800781 L 86.972656 186.800781 L 137.621094 136.109375 L 242.777344 136.109375 L 242.777344 138.445312 L 138.585938 138.445312 Z M 87.9375 189.136719 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 176.070312 217.007812 L 69.835938 217.007812 L 41.640625 188.789062 L 43.289062 187.140625 L 70.804688 214.671875 L 175.101562 214.671875 L 208.195312 181.558594 L 209.847656 183.207031 Z M 176.070312 217.007812 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 310.011719 297.175781 L 261.933594 249.0625 L 79.816406 249.0625 L 79.476562 248.71875 L 19.59375 188.789062 L 21.242188 187.140625 L 80.785156 246.726562 L 262.898438 246.726562 L 311.660156 295.523438 Z M 310.011719 297.175781 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 37.03125 188.789062 L 35.382812 187.140625 L 126.894531 95.566406 L 307.925781 95.566406 L 307.925781 97.902344 L 127.859375 97.902344 Z M 37.03125 188.789062 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 258.617188 288.863281 L 170.988281 288.863281 L 130.871094 248.71875 L 132.519531 247.066406 L 171.953125 286.527344 L 258.617188 286.527344 Z M 258.617188 288.863281 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 147.269531 97.558594 L 145.621094 95.910156 L 178.734375 62.769531 L 349.636719 62.769531 L 349.636719 65.105469 L 179.699219 65.105469 Z M 147.269531 97.558594 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 217.582031 248.71875 L 215.933594 247.066406 L 246.066406 216.914062 L 346.058594 216.914062 L 346.058594 219.25 L 247.03125 219.25 Z M 217.582031 248.71875 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 362.148438 135.714844 L 280.078125 135.714844 L 241.949219 97.558594 L 243.601562 95.910156 L 281.046875 133.382812 L 362.148438 133.382812 Z M 362.148438 135.714844 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        d="M 202.457031 312.417969 L 155.046875 312.417969 L 91.394531 248.71875 L 93.042969 247.066406 L 156.015625 310.082031 L 202.457031 310.082031 Z M 202.457031 312.417969 "
        fillOpacity="1"
        fillRule="nonzero"
      />
    </Icon>
  );
};
export default Circuit;
