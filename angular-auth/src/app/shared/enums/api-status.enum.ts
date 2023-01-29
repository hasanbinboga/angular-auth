export enum ApiStatusEnum {
    ok = 1,
    error = 2
}

export const userActiveTypeDescriptions: Record<keyof typeof ApiStatusEnum, string> = {
    ok: 'Okey',
    error: 'Error'
  };