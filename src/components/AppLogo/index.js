import { Center } from 'native-base'
import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const AppLogo = ({ width = 75, height = 75, ...rest }) => (
  <Center>
    <Svg
      height={height}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1500.000000 1500.000000"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <G
        fill="#000000"
        stroke="none"
        transform="translate(0.000000,1500.000000) scale(0.100000,-0.100000)"
      >
        <Path d="M4790 14704 c-173 -97 -358 -200 -410 -229 -52 -29 -210 -116 -350 -195 -140 -78 -293 -164 -340 -190 -123 -67 -523 -291 -605 -338 l-70 -39 -6 -74 c-4 -41 -7 -1193 -8 -2560 l-1 -2486 23 -32 c16 -24 83 -67 247 -158 285 -159 519 -289 785 -438 660 -369 1020 -568 1051 -581 47 -20 65 -13 255 92 85 48 213 119 284 159 72 40 346 193 610 340 264 148 539 301 610 340 72 40 225 125 340 190 116 65 253 141 305 170 52 29 187 104 300 167 113 63 383 214 600 335 217 121 553 308 747 417 195 108 364 196 377 196 15 0 30 -8 36 -19 7 -13 10 -383 10 -1129 l0 -1109 -25 4 c-17 4 -55 -12 -127 -53 -57 -32 -157 -87 -223 -124 -135 -75 -639 -355 -970 -541 -121 -67 -263 -146 -315 -175 -504 -278 -525 -292 -525 -323 0 -24 -3 -28 -17 -20 -9 5 -26 9 -37 9 -11 0 -134 -64 -273 -141 -350 -196 -590 -330 -743 -414 -71 -40 -204 -114 -295 -165 -91 -51 -223 -125 -295 -165 -570 -315 -535 -294 -535 -327 l0 -30 -62 35 c-35 19 -137 76 -228 127 -91 51 -210 117 -265 148 -96 52 -204 113 -455 255 -63 35 -151 84 -195 107 -44 24 -109 60 -145 80 -70 40 -348 195 -575 320 -77 43 -164 92 -193 109 -29 17 -56 31 -61 31 -17 0 -21 -265 -21 -1406 l0 -1181 22 -33 c17 -24 86 -68 273 -172 138 -77 309 -172 380 -212 72 -41 346 -194 610 -341 264 -147 556 -310 648 -362 92 -52 182 -97 200 -100 38 -6 32 -9 507 257 190 106 541 301 780 435 239 133 590 329 780 435 190 106 404 225 475 265 72 40 366 204 655 365 289 161 584 325 655 365 72 40 220 122 330 184 109 61 209 111 222 111 12 0 27 -9 33 -19 7 -13 10 -384 10 -1131 l0 -1111 -21 11 c-16 9 -24 8 -37 -3 -9 -8 -53 -33 -97 -57 -44 -24 -125 -69 -180 -100 -55 -32 -131 -74 -170 -95 -38 -20 -126 -69 -195 -107 -326 -184 -718 -403 -1202 -670 -153 -84 -280 -160 -282 -168 -3 -8 -7 -59 -8 -114 l-3 -98 37 -32 c20 -17 119 -77 220 -132 100 -56 332 -185 513 -286 182 -102 452 -252 600 -335 149 -83 376 -210 505 -283 139 -78 250 -134 272 -137 33 -5 53 3 150 58 62 35 147 82 188 104 92 51 685 382 1305 728 99 55 234 131 300 167 289 160 343 192 366 216 l24 26 3 4781 c2 2630 0 4846 -4 4925 -3 78 -10 142 -14 142 -8 0 -78 39 -635 350 -170 95 -375 209 -455 252 -80 44 -165 92 -190 107 -25 16 -81 47 -125 71 -44 23 -134 73 -200 110 -66 37 -183 102 -260 145 -77 43 -207 116 -288 162 -81 45 -152 83 -158 83 -6 0 -23 -8 -37 -19 -15 -10 -97 -57 -182 -103 -85 -47 -229 -127 -320 -178 -155 -86 -299 -167 -685 -383 -88 -49 -223 -124 -300 -167 -615 -342 -620 -345 -620 -377 0 -29 -1 -30 -20 -17 -29 20 -40 18 -113 -25 -37 -21 -112 -63 -167 -94 -55 -30 -199 -110 -320 -177 -263 -147 -352 -197 -425 -237 -30 -16 -91 -50 -135 -75 -82 -47 -282 -158 -605 -338 -102 -57 -216 -121 -253 -142 -38 -22 -70 -38 -73 -36 -2 2 -4 508 -4 1123 -1 902 2 1121 12 1131 15 14 212 126 748 424 898 499 1240 690 1298 724 48 29 54 56 21 92 l-20 22 30 13 c17 8 31 19 31 26 0 6 -71 51 -157 99 -87 48 -212 117 -278 154 -66 37 -217 121 -335 187 -118 66 -278 155 -355 198 -77 43 -144 81 -150 85 -5 4 -64 37 -130 72 -66 36 -214 118 -330 183 -449 252 -475 265 -519 265 -34 0 -92 -29 -356 -176z" />
      </G>
    </Svg>
  </Center>
)

export default AppLogo