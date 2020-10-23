import { DualAxis } from "grapher/axis/Axis"
import { ChartManager } from "grapher/chart/ChartManager"
import { SeriesName } from "grapher/core/GrapherConstants"
import { Color } from "coreTable/CoreTableConstants"
import { PointVector } from "grapher/utils/PointVector"
import { TimeBound } from "grapher/utils/TimeBounds"

interface LinePoint {
    x: number
    y: number
}

export interface LineChartSeries {
    seriesName: SeriesName
    color: Color
    isProjection?: boolean
    points: LinePoint[]
}

export interface PlacedLineChartSeries extends LineChartSeries {
    placedPoints: PointVector[]
}

export interface LinesProps {
    dualAxis: DualAxis
    placedSeries: PlacedLineChartSeries[]
    focusedSeriesNames: SeriesName[]
    onHover: (hoverX: number | undefined) => void
    hidePoints?: boolean
    lineStrokeWidth?: number
}

export interface LineChartManager extends ChartManager {
    hidePoints?: boolean
    lineStrokeWidth?: number
    startHandleTimeBound?: TimeBound
}
