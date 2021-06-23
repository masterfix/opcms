import { ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { StoryblokCalendarComponent } from '../components/storyblok-calendar/storyblok-calendar.component';
import { StoryblokDividerComponent } from '../components/storyblok-divider/storyblok-divider.component';
import { StoryblokFallbackComponent } from '../components/storyblok-fallback/storyblok-fallback.component';
import { StoryblokNavItemComponent } from '../components/storyblok-nav-item/storyblok-nav-item.component';
import { StoryblokPageHeaderComponent } from '../components/storyblok-page-header/storyblok-page-header.component';
import { StoryblokPageComponent } from '../components/storyblok-page/storyblok-page.component';
import { StoryblokTeaserComponent } from '../components/storyblok-teaser/storyblok-teaser.component';
import { StoryblokTextComponent } from '../components/storyblok-text/storyblok-text.component';
import { StoryblokComponent } from '../interfaces/storyblok-component';
import { BaseBlok } from '../models/base-blok';

const componentMap: { [k: string]: Type<StoryblokComponent<BaseBlok>> | null } = {
  calendar: StoryblokCalendarComponent,
  divider: StoryblokDividerComponent,
  page: StoryblokPageComponent,
  teaser: StoryblokTeaserComponent,
  text: StoryblokTextComponent,
  'nav-item': StoryblokNavItemComponent,
  'page-header': StoryblokPageHeaderComponent,
};

@Injectable({
  providedIn: 'root'
})
export class StoryblokComponentLoaderService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  loadStoryblokComponent(viewContainerRef: ViewContainerRef, storyblokContent: BaseBlok): ComponentRef<StoryblokComponent<BaseBlok>> | null {

    const dynamicComponent = this.resolveStoryblokComponent(storyblokContent.component);

    if (dynamicComponent === null) {
      return null;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynamicComponent);

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<StoryblokComponent<BaseBlok>>(componentFactory);
    componentRef.instance.blok = storyblokContent;

    return componentRef;
  }

  private resolveStoryblokComponent(componentName: string): Type<StoryblokComponent<BaseBlok>> | null {
    const component = componentMap[componentName];
    return component !== undefined ? component : StoryblokFallbackComponent;
  }

}
