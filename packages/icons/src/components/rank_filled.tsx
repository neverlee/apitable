/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const RankFilled: React.FC<IIconProps> = makeIcon({
    Path: ({ colors }) => <>
    <path d="M7 2.25C7 2.14831 6.97976 2.05134 6.94309 1.96291C6.90649 1.87445 6.85224 1.79158 6.78033 1.71967C6.70842 1.64776 6.62555 1.59351 6.53709 1.55691C6.44866 1.52024 6.35169 1.5 6.25 1.5C6.14831 1.5 6.05134 1.52024 5.96291 1.55691C5.87445 1.59351 5.79158 1.64776 5.71967 1.71967L1.71967 5.71967C1.42678 6.01256 1.42678 6.48744 1.71967 6.78033C2.01256 7.07322 2.48744 7.07322 2.78033 6.78033L5.5 4.06066V13.75C5.5 14.1642 5.83579 14.5 6.25 14.5C6.66421 14.5 7 14.1642 7 13.75V2.25Z" fill={ colors[0] }/>
<path d="M9.46291 14.4431C9.55134 14.4798 9.64831 14.5 9.75 14.5C9.85169 14.5 9.94866 14.4798 10.0371 14.4431C10.1255 14.4065 10.2084 14.3522 10.2803 14.2803L14.2803 10.2803C14.5732 9.98744 14.5732 9.51256 14.2803 9.21967C13.9874 8.92678 13.5126 8.92678 13.2197 9.21967L10.5 11.9393V2.25C10.5 1.83579 10.1642 1.5 9.75 1.5C9.33579 1.5 9 1.83579 9 2.25V13.75C9 13.9563 9.08329 14.1431 9.21808 14.2787L9.21967 14.2803L9.22126 14.2819C9.2928 14.353 9.37511 14.4068 9.46291 14.4431Z" fill={ colors[0] }/>

  </>,
  name: 'rank_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M7 2.25C7 2.14831 6.97976 2.05134 6.94309 1.96291C6.90649 1.87445 6.85224 1.79158 6.78033 1.71967C6.70842 1.64776 6.62555 1.59351 6.53709 1.55691C6.44866 1.52024 6.35169 1.5 6.25 1.5C6.14831 1.5 6.05134 1.52024 5.96291 1.55691C5.87445 1.59351 5.79158 1.64776 5.71967 1.71967L1.71967 5.71967C1.42678 6.01256 1.42678 6.48744 1.71967 6.78033C2.01256 7.07322 2.48744 7.07322 2.78033 6.78033L5.5 4.06066V13.75C5.5 14.1642 5.83579 14.5 6.25 14.5C6.66421 14.5 7 14.1642 7 13.75V2.25Z', 'M9.46291 14.4431C9.55134 14.4798 9.64831 14.5 9.75 14.5C9.85169 14.5 9.94866 14.4798 10.0371 14.4431C10.1255 14.4065 10.2084 14.3522 10.2803 14.2803L14.2803 10.2803C14.5732 9.98744 14.5732 9.51256 14.2803 9.21967C13.9874 8.92678 13.5126 8.92678 13.2197 9.21967L10.5 11.9393V2.25C10.5 1.83579 10.1642 1.5 9.75 1.5C9.33579 1.5 9 1.83579 9 2.25V13.75C9 13.9563 9.08329 14.1431 9.21808 14.2787L9.21967 14.2803L9.22126 14.2819C9.2928 14.353 9.37511 14.4068 9.46291 14.4431Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
