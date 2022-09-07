export interface IObjectsNewServicesGroupItem {
    name: string;
    service: string;
    is_disabled: boolean;
}

export interface IObjectsNewServicesGroup {
    available_services: IObjectsNewServicesGroupItem[];
    group_name: string;
}
