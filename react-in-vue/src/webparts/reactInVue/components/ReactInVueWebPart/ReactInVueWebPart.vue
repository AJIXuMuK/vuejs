<template>
    <div :class="$style.ReactInVueWebPart">
        <div :class="$style.container">
            <div :class="$style.row">
                <div :class="$style.column">
                    <web-part-title :title="title" :displayMode="displayMode" @updateProperty="_onTitleUpdate" />
                    <react-component :text="description" />
                    <primary-button text="Click Me!" @onClick="_onButtonClicked" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Provide } from "vue-property-decorator";
import { ReactComponent } from "../ReactComponent/ReactComponent";
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { DisplayMode } from "@microsoft/sp-core-library";
import { ReactComponent as ReactComponentDecorator } from "../../../../utils/ReactComponentDecorator";
import { VuePlugin, ReactInVue } from "vuera";
/**
 * Component's properties
 */
export interface IReactInVueWebPartProps {
  description: string;
  title: string;
  displayMode: DisplayMode;
  onButtonClicked: () => void;
  onTitleChanged: (value: string) => void;
}

//
// setting up the plugin to work with React components inside Vue
//
Vue.use(VuePlugin);

/**
 * Class-component
 */
@Component({
  components: {
    "react-component": ReactInVue(ReactComponent),
    "web-part-title": ReactInVue(WebPartTitle),
    "primary-button": ReactInVue(PrimaryButton)
  }
})
export default class ReactInVueWebPart extends Vue
  implements IReactInVueWebPartProps {
  /**
   * implementing ISimpleWebPartProps interface
   */
  @Prop()
  public description: string;
  @Prop()
  public title: string;
  @Prop()
  public displayMode: DisplayMode;
  @Prop()
  public onButtonClicked: () => void;
  @Prop()
  public onTitleChanged: (value: string) => void;

  /**
   * Vue component from custom component
   */
  //@ReactComponentDecorator(ReactComponent, 'react-component')
  //public reactComponent: ReactComponent;

  /**
   * Vue compoenent from SPFx Reusable React controls repo
   */
  //@ReactComponentDecorator(WebPartTitle, 'web-part-title')
  //public webPartTitle: WebPartTitle;

  /**
   * Vue compoenent from Office UI Fabric Primary Buttom
   */
  //@ReactComponentDecorator(PrimaryButton, 'primary-button')
  //public primaryButton: PrimaryButton;

  private _onTitleUpdate(value: string): void {
    if (this.onTitleChanged) {
      this.onTitleChanged(value);
    }
  }

  private _onButtonClicked(): void {
    if (this.onButtonClicked) {
      this.onButtonClicked();
    }
  }
}
</script>
<style lang="scss" module>
@import "~@microsoft/sp-office-ui-fabric-core/dist/sass/_SPFabricCore.scss";

.ReactInVueWebPart {
  .container {
    max-width: 700px;
    margin: 0px auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .row {
    @include ms-Grid-row;
    @include ms-fontColor-white;
    background-color: $ms-color-themeDark;
    padding: 20px;
  }

  .column {
    @include ms-Grid-col;
    @include ms-lg10;
    @include ms-xl8;
    @include ms-xlPush2;
    @include ms-lgPush1;
  }

  .title {
    @include ms-font-xl;
    @include ms-fontColor-white;
  }

  .subTitle {
    @include ms-font-l;
    @include ms-fontColor-white;
  }

  .description {
    @include ms-font-l;
    @include ms-fontColor-white;
  }

  .button {
    // Our button
    text-decoration: none;
    height: 32px;

    // Primary Button
    min-width: 80px;
    background-color: $ms-color-themePrimary;
    border-color: $ms-color-themePrimary;
    color: $ms-color-white;

    // Basic Button
    outline: transparent;
    position: relative;
    font-family: "Segoe UI WestEuropean", "Segoe UI", -apple-system,
      BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: $ms-font-size-m;
    font-weight: $ms-font-weight-regular;
    border-width: 0;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    padding: 0 16px;

    .label {
      font-weight: $ms-font-weight-semibold;
      font-size: $ms-font-size-m;
      height: 32px;
      line-height: 32px;
      margin: 0 4px;
      vertical-align: top;
      display: inline-block;
    }
  }
}
</style>

