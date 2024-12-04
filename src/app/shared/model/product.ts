export interface Iproduct{
    pname: string;
    pdetails: string;
    pId: string;
    pstatus: string;
}

export enum productstatus{
  Inprogress = "Inprogress",
  Dispatched = "Dispatched",
  Delivered = "Delivered"
}
