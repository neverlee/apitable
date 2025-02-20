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

export const ChartColumnStackFilled: React.FC<IIconProps> = makeIcon({
    Path: ({ colors }) => <>
    <path d="M23 41H13C12.4477 41 12 41.4477 12 42V67C12 67.5523 12.4477 68 13 68H23C23.5523 68 24 67.5523 24 67V42C24 41.4477 23.5523 41 23 41Z" fill={ colors[2] }/>
<path d="M12 60H24V67C24 67.5523 23.5523 68 23 68H13C12.4477 68 12 67.5523 12 67V60Z" fill={ colors[0] }/>
<path d="M24 48H12V60H24V48Z" fill={ colors[1] }/>
<path d="M45 12H35C34.4477 12 34 12.4477 34 13V67C34 67.5523 34.4477 68 35 68H45C45.5523 68 46 67.5523 46 67V13C46 12.4477 45.5523 12 45 12Z" fill={ colors[2] }/>
<path d="M34 35H46V67C46 67.5523 45.5523 68 45 68H35C34.4477 68 34 67.5523 34 67V35Z" fill={ colors[0] }/>
<path d="M46 24H34V35H46V24Z" fill={ colors[1] }/>
<path d="M67 29H57C56.4477 29 56 29.4477 56 30V67C56 67.5523 56.4477 68 57 68H67C67.5523 68 68 67.5523 68 67V30C68 29.4477 67.5523 29 67 29Z" fill={ colors[2] }/>
<path d="M56 48H68V67C68 67.5523 67.5523 68 67 68H57C56.4477 68 56 67.5523 56 67V48Z" fill={ colors[0] }/>
<path d="M68 40H56V48H68V40Z" fill={ colors[1] }/>

  </>,
  name: 'chart_column_stack_filled',
  defaultColors: ['#7B67EE', '#9CB9FF', '#FFBA2E'],
  colorful: true,
  allPathData: ['M23 41H13C12.4477 41 12 41.4477 12 42V67C12 67.5523 12.4477 68 13 68H23C23.5523 68 24 67.5523 24 67V42C24 41.4477 23.5523 41 23 41Z', 'M12 60H24V67C24 67.5523 23.5523 68 23 68H13C12.4477 68 12 67.5523 12 67V60Z', 'M24 48H12V60H24V48Z', 'M45 12H35C34.4477 12 34 12.4477 34 13V67C34 67.5523 34.4477 68 35 68H45C45.5523 68 46 67.5523 46 67V13C46 12.4477 45.5523 12 45 12Z', 'M34 35H46V67C46 67.5523 45.5523 68 45 68H35C34.4477 68 34 67.5523 34 67V35Z', 'M46 24H34V35H46V24Z', 'M67 29H57C56.4477 29 56 29.4477 56 30V67C56 67.5523 56.4477 68 57 68H67C67.5523 68 68 67.5523 68 67V30C68 29.4477 67.5523 29 67 29Z', 'M56 48H68V67C68 67.5523 67.5523 68 67 68H57C56.4477 68 56 67.5523 56 67V48Z', 'M68 40H56V48H68V40Z'],
  width: '80',
  height: '80',
  viewBox: '0 0 80 80',
});
