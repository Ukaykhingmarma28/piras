import { Signal, ReadonlySignal } from "@preact/signals";
import { JSX } from "preact";
import { CSSProperties } from "preact/compat";
declare enum WeekDay {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6
}
type WeekWithDates = Date[];
type MonthWithDates = Date[][];
declare enum Month {
    JANUARY = 0,
    FEBRUARY = 1,
    MARCH = 2,
    APRIL = 3,
    MAY = 4,
    JUNE = 5,
    JULY = 6,
    AUGUST = 7,
    SEPTEMBER = 8,
    OCTOBER = 9,
    NOVEMBER = 10,
    DECEMBER = 11
}
interface TimeUnits {
    firstDayOfWeek: WeekDay;
    getMonthWithTrailingAndLeadingDays(year: number, month: Month): MonthWithDates;
    getWeekFor(date: Date): WeekWithDates;
    getMonthsFor(year: number): Date[];
}
declare enum DatePickerView {
    MONTH_DAYS = "month-days",
    YEARS = "years"
}
interface DatePickerState {
    isOpen: Signal<boolean>;
    isDisabled: Signal<boolean>;
    selectedDate: Signal<string>;
    inputDisplayedValue: Signal<string>;
    datePickerDate: Signal<string>;
    datePickerView: Signal<DatePickerView>;
    inputWrapperElement: Signal<HTMLDivElement | undefined>;
    isDark: Signal<boolean>;
    open(): void;
    close(): void;
    toggle(): void;
    setView(view: DatePickerView): void;
}
type TranslationVariables = {
    [key: string]: string | number;
};
type TranslateFn = (key: string, variables?: TranslationVariables) => string;
/**
 * This interface serves as a bridge between the AppSingleton for the date picker and calendar
 * */
interface AppSingleton {
    timeUnitsImpl: TimeUnits;
    datePickerState: DatePickerState;
    translate: TranslateFn;
}
/**
 * This interface serves as a bridge between the config interface for the date picker amd the calendar.
 * */
interface Config {
    locale: Signal<string>;
    firstDayOfWeek: Signal<WeekDay>;
}
declare enum Placement {
    TOP_START = "top-start",
    TOP_END = "top-end",
    BOTTOM_START = "bottom-start",
    BOTTOM_END = "bottom-end"
}
interface DatePickerAppSingleton extends AppSingleton {
    config: DatePickerConfigInternal;
}
type DatePickerListeners = {
    onChange?: (date: string) => void;
    onEscapeKeyDown?: ($app: DatePickerAppSingleton) => void;
};
type DatePickerStyle = {
    dark?: boolean;
    fullWidth?: boolean;
};
interface DatePickerConfigInternal extends Config {
    min: string;
    max: string;
    placement: Placement;
    listeners: DatePickerListeners;
    style: DatePickerStyle;
    teleportTo?: HTMLElement;
    label?: string;
    name?: string;
    disabled?: boolean;
}
interface DatePickerConfigExternal extends Partial<Omit<DatePickerConfigInternal, "placement" | "firstDayOfWeek" | "locale">> {
    selectedDate?: string;
    placement?: Placement | string;
    firstDayOfWeek?: WeekDay;
    locale?: string;
}
// This enum is used to represent names of all internally built views of the calendar
declare enum InternalViewName {
    Day = "day",
    Week = "week",
    MonthGrid = "month-grid",
    MonthAgenda = "month-agenda"
}
// Since implementers can use custom views, we need to have a type that combines the internal views with these custom views
type ViewName = InternalViewName | string;
type DateRange = {
    start: string;
    end: string;
};
interface RangeSetterConfig {
    date: string;
    timeUnitsImpl: TimeUnits;
    calendarConfig: CalendarConfigInternal;
    range: Signal<DateRange | null>;
}
type PreactViewComponent = (props: {
    $app: CalendarAppSingleton;
    id: string;
}) => JSX.Element;
declare const addMonths: (to: string, nMonths: number) => string;
declare const addDays: (to: string, nDays: number) => string;
type ViewConfig<FrameworkComponent = PreactViewComponent> = {
    /**
     * a unique identifier for the view
     * */
    name: ViewName;
    /**
     * text that will be displayed in the view dropdown
     * */
    label: string;
    /**
     * function that is called when a new date is selected
     * */
    setDateRange: (config: RangeSetterConfig) => DateRange;
    /**
     * should the view be displayed on small screens (< 700px calendar width)
     * */
    hasSmallScreenCompat: boolean;
    /**
     * should the view be displayed on wide screens (> 700px calendar width)
     * */
    hasWideScreenCompat: boolean;
    /**
     * The component you want to render
     * */
    Component: FrameworkComponent;
    /**
     * function that is called when the user clicks the backward/forward button
     * */
    backwardForwardFn: typeof addDays | typeof addMonths;
    /**
     * number of units to add into the backwardForwardFn function. Result behind the scenes for example:
     * backwardForwardFn = addDays
     * backwardForwardUnits = 1
     * result (behind the scenes) = addDays(date, 1)
     * */
    backwardForwardUnits: number;
};
type View<FrameworkComponent = PreactViewComponent> = ViewConfig<FrameworkComponent> & {
    render(onElement: HTMLElement, $app: CalendarAppSingleton): void;
    destroy(): void;
};
type EventId = number | string;
type startDate = string;
type nDays = number;
type EventFragments = Record<startDate, nDays>;
type CalendarEventOptions = {
    disableDND?: boolean;
    disableResize?: boolean;
    additionalClasses?: string[];
};
interface CalendarEventExternal {
    id: EventId;
    start: string;
    end: string;
    title?: string;
    people?: string[];
    location?: string;
    description?: string;
    calendarId?: string;
    _customContent?: {
        timeGrid?: string;
        dateGrid?: string;
        monthGrid?: string;
        monthAgenda?: string;
    };
    _options?: CalendarEventOptions;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}
interface CalendarEventInternal extends CalendarEventExternal {
    // event duration
    _isSingleDayTimed: boolean;
    _isSingleDayFullDay: boolean;
    _isSingleHybridDayTimed: boolean;
    _isMultiDayTimed: boolean;
    _isMultiDayFullDay: boolean;
    // week time grid
    _previousConcurrentEvents: number | undefined;
    _totalConcurrentEvents: number | undefined;
    _maxConcurrentEvents: number | undefined;
    // week date grid
    _nDaysInGrid: number | undefined;
    // month grid
    _eventFragments: EventFragments;
    _color: string;
    _createdAt: Date | undefined;
    _getForeignProperties(): Record<string, unknown>;
    _getExternalEvent(): CalendarEventExternal;
}
type DayBoundariesExternal = {
    start: string;
    end: string;
};
type DayBoundariesInternal = {
    start: number;
    end: number;
};
interface PluginBase<Name extends string> {
    name: Name;
    /**
     * Allow implementers to dynamically add any properties to the global app object as they see fit.
     * In order to avoid conflict with future properties added to the library, we recommend
     * using the unique prefix `$` for any custom properties added to the global app object.
     * for example $app['$websocketService'] = new WebsocketService().
     * Adding properties to existing sub-objects is discouraged, since this will make your application more
     * brittle to future changes in the library.
     * */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    beforeRender?($app: CalendarAppSingleton | any): void;
    /**
     * Allow implementers to dynamically add any properties to the global app object as they see fit.
     * In order to avoid conflict with future properties added to the library, we recommend
     * using the unique prefix `$` for any custom properties added to the global app object.
     * for example $app['$websocketService'] = new WebsocketService().
     * Adding properties to existing sub-objects is discouraged, since this will make your application more
     * brittle to future changes in the library.
     * */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onRender?($app: CalendarAppSingleton | any): void;
    onRangeUpdate?: (range: DateRange) => void;
    destroy?(): void;
}
interface TimeGridDragHandler {
}
type DayBoundariesDateTime = {
    start: string;
    end: string;
};
interface DateGridDragHandler {
}
interface EventCoordinates {
    clientX: number;
    clientY: number;
}
interface DragHandlerDependencies {
    $app: CalendarAppSingleton;
    eventCoordinates: EventCoordinates;
    eventCopy: CalendarEventInternal;
    updateCopy: (newCopy: CalendarEventInternal | undefined) => void;
}
interface MonthGridDragHandler {
}
interface DragAndDropPlugin extends PluginBase<string> {
    createTimeGridDragHandler(dependencies: DragHandlerDependencies, dayBoundariesDateTime: DayBoundariesDateTime): TimeGridDragHandler;
    createDateGridDragHandler(dependencies: DragHandlerDependencies): DateGridDragHandler;
    createMonthGridDragHandler(calendarEvent: CalendarEventInternal, $app: CalendarAppSingleton): MonthGridDragHandler;
}
type EventModalProps = {
    $app: CalendarAppSingleton;
};
interface EventModalPlugin extends PluginBase<string> {
    calendarEvent: Signal<CalendarEventInternal | null>;
    calendarEventDOMRect: Signal<DOMRect | null>;
    calendarEventElement: Signal<HTMLElement | null>;
    close(): void;
    setCalendarEvent(event: CalendarEventInternal | null, eventTargetDOMRect: DOMRect | null): void;
    ComponentFn(props: EventModalProps): JSX.Element;
}
interface CalendarCallbacks {
    onEventClick?: (event: CalendarEventExternal, e: UIEvent) => void;
    onDoubleClickEvent?: (event: CalendarEventExternal, e: UIEvent) => void;
    onRangeUpdate?: (range: DateRange) => void;
    onSelectedDateUpdate?: (date: string) => void;
    onClickDate?: (date: string) => void;
    onDoubleClickDate?: (date: string) => void;
    onClickDateTime?: (dateTime: string) => void;
    onDoubleClickDateTime?: (dateTime: string) => void;
    onClickAgendaDate?: (date: string) => void;
    onDoubleClickAgendaDate?: (date: string) => void;
    onClickPlusEvents?: (date: string) => void;
    onMouseDownDateTime?: (dateTime: string, mouseDownEvent: MouseEvent) => void;
    onMouseDownDateGridDate?: (date: string, mouseDownEvent: MouseEvent) => void;
    onMouseDownMonthGridDate?: (date: string, mouseDownEvent: MouseEvent) => void;
    /**
     * Run a validator function before updating an event.
     * Return false to prevent the event from being updated.
     * Return true to allow the event to be updated.
     *
     * @param oldEvent The event before the update
     * @param newEvent The event after the update
     * @param $app The calendar app singleton
     * */
    onBeforeEventUpdate?: (oldEvent: CalendarEventExternal, newEvent: CalendarEventExternal, $app: CalendarAppSingleton) => boolean;
    /**
     * Receive the updated event after it has been updated by for example drag & drop, resize or the interactive event modal.
     *
     * @param event The updated event
     * */
    onEventUpdate?: (event: CalendarEventExternal) => void;
    beforeRender?: ($app: CalendarAppSingleton) => void;
    onRender?: ($app: CalendarAppSingleton) => void;
    isCalendarSmall?: ($app: CalendarAppSingleton) => boolean;
}
type CustomComponentName = "timeGridEvent" | "dateGridEvent" | "monthGridEvent" | "monthAgendaEvent" | "eventModal" | "headerContentLeftPrepend" | "headerContentLeftAppend" | "headerContentRightPrepend" | "headerContentRightAppend" | "headerContent" | "interactiveModalAdditionalFields" | "weekGridDate" | "weekGridHour" | "monthGridDayName" | "monthGridDate" | string;
type CustomComponentFns = {
    [key in CustomComponentName]?: CustomComponentFn;
};
interface EventsFacade {
    get(id: EventId): CalendarEventExternal | undefined;
    getAll(): CalendarEventExternal[];
    add(event: CalendarEventExternal): void;
    update(event: CalendarEventExternal): void;
    remove(id: EventId): void;
    set(events: CalendarEventExternal[]): void;
}
interface EventRecurrencePlugin extends PluginBase<string> {
    updateRecurrenceDND(eventId: EventId, oldEventStart: string, newEventStart: string): void;
    updateRecurrenceOnResize(eventId: EventId, oldEventEnd: string, newEventEnd: string): void;
    eventsFacade: EventsFacade;
}
interface ResizePlugin extends PluginBase<string> {
    createTimeGridEventResizer(calendarEvent: CalendarEventInternal, updateCopy: (newCopy: CalendarEventInternal | undefined) => void, mouseDownEvent: MouseEvent, dayBoundariesDateTime: {
        start: string;
        end: string;
    }): void;
    createDateGridEventResizer(calendarEvent: CalendarEventInternal, updateCopy: (newCopy: CalendarEventInternal | undefined) => void, mouseDownEvent: MouseEvent): void;
}
type BackgroundEvent = {
    start: string;
    end: string;
    style: CSSProperties;
    title?: string;
    rrule?: string;
};
interface DatePickerTranslations {
    Date: string;
    "MM/DD/YYYY": string;
    "Next month": string;
    "Previous month": string;
    "Choose Date": string;
}
interface CalendarTranslations {
    Today: string;
    Month: string;
    Week: string;
    Day: string;
    "Select View": string;
    events: string;
    event: string;
    "No events": string;
    "Next period": string;
    "Previous period": string;
    to: string; // as in 2/1/2020 to 2/2/2020
    "Full day- and multiple day events": string;
    "Link to {{n}} more events on {{date}}": string;
    "Link to 1 more event on {{date}}": string;
    CW: string;
}
interface TimePickerTranslations {
    Time: string; // default label
    AM: string; // for 12-hour clock mode
    PM: string; // for 12-hour clock mode
    Cancel: string;
    OK: string;
    "Select time": string;
}
type Language = Partial<DatePickerTranslations> & Partial<CalendarTranslations> & Partial<TimePickerTranslations> & Record<string, string>; // enable custom & premium plugins to use the default translator
type WeekOptions = {
    gridHeight: number;
    nDays: number;
    eventWidth: number;
    timeAxisFormatOptions: Intl.DateTimeFormatOptions;
    eventOverlap: boolean;
};
type MonthGridOptions = {
    nEventsPerDay: number;
};
type ColorDefinition = {
    main: string;
    container: string;
    onContainer: string;
};
type CalendarType = {
    colorName: string;
    label?: string;
    lightColors?: ColorDefinition;
    darkColors?: ColorDefinition;
};
type Plugins = {
    dragAndDrop?: DragAndDropPlugin;
    eventModal?: EventModalPlugin;
    scrollController?: PluginBase<string>;
    eventRecurrence?: EventRecurrencePlugin;
    resize?: ResizePlugin;
    [key: string]: PluginBase<string> | undefined;
};
type CustomComponentFn = (wrapperElement: HTMLElement, props: Record<string, unknown>) => void;
interface CalendarConfigInternal extends Config {
    theme: string | undefined;
    defaultView: ViewName;
    views: Signal<View[]>;
    dayBoundaries: Signal<DayBoundariesInternal>;
    weekOptions: Signal<WeekOptions>;
    calendars: Signal<Record<string, CalendarType>>;
    isDark: Signal<boolean>;
    minDate: Signal<string | undefined>;
    maxDate: Signal<string | undefined>;
    monthGridOptions: Signal<MonthGridOptions>;
    plugins: Plugins;
    isResponsive: boolean;
    showWeekNumbers: Signal<boolean>;
    callbacks: CalendarCallbacks;
    _customComponentFns: CustomComponentFns;
    translations: Signal<Record<string, Language>>;
    direction: "ltr" | "rtl";
    // Getters
    isHybridDay: boolean;
    timePointsPerDay: number;
}
interface CalendarDatePickerConfigExternal extends Omit<DatePickerConfigExternal, "listeners" | "placement"> {
}
interface ReducedCalendarConfigInternal extends Omit<CalendarConfigInternal, "events" | "dayBoundaries" | "isHybridDay" | "plugins" | "views" | "_customComponentFns" | "calendars" | "weekOptions" | "isDark" | "minDate" | "maxDate" | "monthGridOptions" | "locale" | "firstDayOfWeek" | "translations" | "showWeekNumbers" | "direction"> {
}
interface CalendarConfigExternal extends Partial<ReducedCalendarConfigInternal> {
    datePicker?: CalendarDatePickerConfigExternal;
    events?: CalendarEventExternal[];
    backgroundEvents?: BackgroundEvent[];
    dayBoundaries?: DayBoundariesExternal;
    views: [
        View,
        ...View[]
    ];
    selectedDate?: string;
    plugins?: PluginBase<string>[];
    calendars?: Record<string, CalendarType>;
    weekOptions?: Partial<WeekOptions>;
    isDark?: boolean;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    monthGridOptions?: MonthGridOptions;
    locale?: string;
    firstDayOfWeek?: WeekDay;
    skipValidation?: boolean;
    translations?: Record<string, Language>;
    showWeekNumbers?: boolean;
}
interface CalendarState {
    isCalendarSmall: Signal<boolean | undefined>;
    view: ReadonlySignal<ViewName>;
    setView: (view: ViewName, selectedDate: string) => void;
    range: Signal<DateRange | null>;
    isDark: Signal<boolean>;
    setRange: (date: string) => void;
}
type EventsFilterPredicate = ((event: CalendarEventInternal) => boolean) | undefined;
interface CalendarEvents {
    list: Signal<CalendarEventInternal[]>;
    filterPredicate: Signal<EventsFilterPredicate>;
    backgroundEvents: Signal<BackgroundEvent[]>;
}
interface CalendarElements {
    calendarWrapper: HTMLDivElement | undefined;
}
interface CalendarAppSingleton extends AppSingleton {
    config: CalendarConfigInternal;
    datePickerConfig: DatePickerConfigInternal;
    calendarState: CalendarState;
    calendarEvents: CalendarEvents;
    elements: CalendarElements;
}
declare class CalendarApp {
    private $app;
    events: EventsFacade;
    private calendarContainerEl;
    constructor($app: CalendarAppSingleton);
    render(el: HTMLElement): void;
    destroy(): void;
    setTheme(theme: "light" | "dark"): void;
    getTheme(): "light" | "dark";
    /**
     * @internal
     * Purpose: To be consumed by framework adapters for custom component rendering.
     * */
    _setCustomComponentFn(fnId: keyof CustomComponentFns, fn: CustomComponentFn): void;
}
declare const toDateString: (date: Date) => string;
declare const toTimeString: (date: Date) => string;
declare const toDateTimeString: (date: Date) => string;
declare const toJSDate: (dateTimeSpecification: string) => Date;
type CalendarAppWithPlugins<Plugins extends PluginBase<string>[]> = {
    [Name in Plugins[number]["name"]]: Extract<Plugins[number], {
        name: Name;
    }>;
};
declare const createCalendar: <Plugins extends PluginBase<string>[]>(config: CalendarConfigExternal, plugins?: Plugins) => CalendarApp & CalendarAppWithPlugins<Plugins>;
declare const viewWeek: View;
declare const createViewWeek: () => View;
declare const viewMonthGrid: View;
declare const createViewMonthGrid: () => View;
declare const viewDay: View;
declare const createViewDay: () => View;
declare const viewMonthAgenda: View;
declare const createViewMonthAgenda: () => View;
declare const createPreactView: (config: ViewConfig) => View;
declare const setRangeForWeek: (config: RangeSetterConfig) => DateRange;
declare const setRangeForMonth: (config: RangeSetterConfig) => DateRange;
declare const setRangeForDay: (config: RangeSetterConfig) => DateRange;
declare const externalEventToInternal: (event: CalendarEventExternal, config: CalendarConfigInternal) => CalendarEventInternal;
export type { CalendarConfigExternal as CalendarConfig, CustomComponentFn, CalendarEventExternal as CalendarEvent, CalendarEventExternal, BackgroundEvent, CalendarType, DayBoundariesExternal, WeekOptions, MonthGridOptions, PluginBase };
export { createCalendar, viewWeek, viewMonthGrid, viewDay, viewMonthAgenda, CalendarApp, toDateString, toTimeString, toDateTimeString, toJSDate, createPreactView, setRangeForDay, setRangeForWeek, setRangeForMonth, externalEventToInternal, createViewWeek, createViewMonthGrid, createViewDay, createViewMonthAgenda };
