export interface IObjectsNewServicesGroupItem {
    name: string;
    service: string;
}

export interface IObjectsNewServicesGroup {
    available_services: IObjectsNewServicesGroupItem[];
    group_name: string;
}
