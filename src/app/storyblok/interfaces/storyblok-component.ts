import { BaseBlok } from "../models/base-blok";

export interface StoryblokComponent<T extends BaseBlok> {
    blok: T;
}
