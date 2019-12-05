export type FormConfig = InputConfig | SelectConfig | GroupConfig;

interface BaseConfig {
    label: string;
    name: string;
}

export interface InputConfig extends BaseConfig {
    type: 'input';
}

export interface SelectConfig extends BaseConfig {
    type: 'select';
    options: string[];
}

export interface GroupConfig extends BaseConfig {
    type: 'group';
    children: FormConfig[];
}
