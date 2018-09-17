import * as React from 'react';
import Component, { createDecorator } from 'vue-class-component';

/**
 * ReactComponent decorator that allows to define class property as a child component.
 * Works with @see {@link https://github.com/akxcv/vuera}
 * @param componentType - React component class
 * @param name - custom tag name that can be used in the template. Optional. Name of the property will be used if not provided.
 */
export function ReactComponent(componentType: React.ComponentClass, name?: string): PropertyDecorator {
    return createDecorator((componentOptions, key) => {
        (componentOptions.components || (componentOptions.components = {}) as any)[name || key] = componentType;
      });
}