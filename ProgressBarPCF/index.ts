import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';
import ProgressBarWithStages from './component/progressComponent.jsx'




const DEFAULT_OPTIONS: ComponentFramework.PropertyHelper.OptionMetadata[] = [{
	Value: 10,
	Label: "10% 1",
	Color: "#6B8E23",
},
{
	Value: 30,
	Label: "30% 3 Herer goes a large text that have to be",
	Color: "#9ACD32"
},
{
	Value: 50,
	Label: "50% 5 here other large text to be visible",
	Color: "#556B2F"
},
{
	Value: 70,
	Label: "70% 7",
	Color: "#ADFF2F"
},
{
	Value: 90,
	Label: "90% 9",
	Color: "#8FBC8F"
},
{
	Value: 100,
	Label: "100% 100",
	Color: "#006400"
}

];


export class ProgressBarPCF implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private allOptions: ComponentFramework.PropertyHelper.OptionMetadata[];
	private defaultValue: number | undefined;
	private isDisabled: boolean;
	private dropdownOptions: any;
	private container: HTMLDivElement;
	private currentValue: number | null;
	private notifyOutputChanged: () => void;
	/**
	 * Empty constructor.
	 */
	constructor() {

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {

		let opts = context.parameters.OptionSetField.attributes!.Options;
		//todo
		if (opts?.length === 3) {
			let i = 0;
			opts = DEFAULT_OPTIONS
		}
		this.allOptions = [
			{ Label: "--Select--", Value: -1, Color: "#FFFFFF" },
			...opts];

		// Id Generator for Array
		let i = 0;
		this.dropdownOptions = this.allOptions.map((option: ComponentFramework.PropertyHelper.OptionMetadata, i: any) => ({ Value: option.Value, Label: option.Label, Color: { color: option.Color }, Id: i + 1 }))
		this.defaultValue = context.parameters.OptionSetField.attributes?.DefaultValue;
		this.container = container;

		this.notifyOutputChanged = notifyOutputChanged;

		this.renderControl(context);
	}


	private renderControl(context: ComponentFramework.Context<IInputs>): void {
		this.isDisabled = context.mode.isControlDisabled;
		let currentValueObj = this.dropdownOptions.filter(element => element.Value == context.parameters.OptionSetField.raw)
		currentValueObj.length == 0 ? this.currentValue = 0 : this.currentValue = currentValueObj[0].Id;
		

		let params = {
			options: this.dropdownOptions ?? DEFAULT_OPTIONS,
			selectedKey: this.currentValue,
			onChange: (newValue: number | null) => {
				this.currentValue = newValue;

				this.notifyOutputChanged();
			},
			isDisabled: this.isDisabled,
			defaultValue: this.defaultValue
		};
		//	console.log();		
		ReactDOM.render(React.createElement(ProgressBarWithStages, { params }),
			this.container);

	}

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {

		this.renderControl(context);
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as ???bound??? or ???output???
	 */
	public getOutputs(): IOutputs {
		return {
			OptionSetField: this.currentValue == null ? undefined : this.currentValue
		};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		// Add code to cleanup control if necessary
		ReactDOM.unmountComponentAtNode(this.container);
	}


}