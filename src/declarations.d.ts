/* eslint-disable @typescript-eslint/no-explicit-any */
interface Err extends Error {
  status: number;
  data?: Record<string, any>;
}
