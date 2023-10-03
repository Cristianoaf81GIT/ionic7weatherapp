
/**
 * @typedef {object} IApiWeatherService
 * @member {Function} get
 */
export interface IApiWeatherService {
  get(city: string, units: 'metric' | 'imperial'): void;
}
