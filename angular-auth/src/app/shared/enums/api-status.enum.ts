export enum ApiStatusEnum {
    ok = 0,
    error = 1
}

export const userActiveTypeDescriptions: Record<keyof typeof ApiStatusEnum, string> = {
    ok: 'Okey',
    error: 'Error'
  };