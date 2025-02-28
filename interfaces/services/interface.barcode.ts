export interface IParamsSearchAll {
  code?: string | null;
  description?: string | null;
}

export interface IParamsUpdate {
  id: number;
  code?: string | null;
  description?: string | null;
}

export interface IResponseBarcodes {
  id: number;
  code: string;
  description: string;
  scannedDate: string;
  scannedAt: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
