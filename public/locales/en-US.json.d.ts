interface EnUS {
	langCode: "en-US";
	langName: "English (US)";
	messages: {
		resumingVideo: "Resuming video at {{VIDEO_TIME}}";
		settingVolume: "Setting volume boost to {{VOLUME_BOOST_AMOUNT}}";
	};
	pages: {
		content: {
			features: {
				featureMenu: { label: "Feature menu" };
				loopButton: { label: "Loop"; toggle: { off: "Loop off"; on: "Loop on" } };
				maximizePlayerButton: { label: "Maximize"; toggle: { off: "Maximize off"; on: "Maximize on" } };
				openTranscriptButton: { label: "Open transcript" };
				screenshotButton: { copiedToClipboard: "Screenshot copied to clipboard"; label: "Screenshot" };
				videoHistory: { resumeButton: "Resume"; resumePrompt: { close: "Close" } };
				volumeBoostButton: {
					label: "Volume Boost";
					toggle: { off: "Volume boost off"; on: "Volume boost on" };
				};
			};
		};
		options: {
			notifications: {
				error: {
					scrollWheelHoldModifierKey: {
						sameKey: {
							speedControl: "The scroll wheel speed control modifier key cannot be the same as the scroll wheel volume control modifier key.";
							volumeControl: "The scroll wheel volume control modifier key cannot be the same as the scroll wheel speed control modifier key.";
						};
					};
				};
				info: {
					reset: 'All options have been reset to their default values.\nYou can now save the changes by clicking the "Confirm" button or discard them by closing this page or ignore this notification.';
				};
				success: { saved: "Options saved." };
			};
		};
	};
	settings: {
		clearData: {
			allDataDeleted: "All data has been deleted.";
			confirmAlert: "This will delete all extension data related to options. Continue?";
		};
		sections: {
			automaticQuality: {
				enable: {
					label: "Automatic quality adjustment";
					title: "Automatically adjusts the video quality to the selected level.";
				};
				select: { label: "Player quality"; title: "The quality to set the video to" };
				title: "Automatic quality settings";
			};
			bottomButtons: {
				clear: {
					title: "Clears all data this extension has stored on your machine";
					value: "Clear Data";
				};
				confirm: { title: "Confirm setting reset"; value: "Confirm" };
				reset: {
					title: "Resets all settings to their defaults, Click the confirm button to save the changes";
					value: "Reset";
				};
			};
			buttonPlacement: {
				select: {
					buttonNames: {
						loopButton: "Loop button";
						maximizePlayerButton: "Maximize button";
						openTranscriptButton: "Open Transcript button";
						screenshotButton: "Screenshot button";
						volumeBoostButton: "Volume Boost button";
					};
					options: {
						below_player: { placement: "below the player controls"; value: "Below Player" };
						feature_menu: { placement: "in the feature menu"; value: "Feature Menu" };
						player_controls_left: { placement: "on the left side of player controls"; value: "Left Controls" };
						player_controls_right: { placement: "on the right side of player controls"; value: "Right Controls" };
					};
					title: "Place the {{BUTTON_NAME}} {{PLACEMENT}}";
				};
				title: "Button Placement Settings";
			};
			customCSS: {
				editor: {
					collapse: "Collapse Editor";
					expand: "Expand Editor";
					noProblems: "No problems found.";
				};
				enable: {
					label: "Enable custom CSS";
					title: "Enables custom CSS to be applied to the page";
				};
				title: "Custom CSS Settings";
			};
			featureMenu: {
				openType: {
					select: {
						label: "Menu Activation Type";
						options: { click: "Click"; hover: "Hover" };
						title: "Select the method to activate the feature menu";
					};
					title: "Feature menu settings";
				};
			};
			importExportSettings: {
				exportButton: {
					success: "Settings successfully exported";
					title: "Export settings to a JSON file";
					value: "Export Settings";
				};
				importButton: {
					error: {
						unknown: "Error importing settings. Please check the file format.\nAn unknown error occurred.";
						validation: "Error importing settings. Please check the file format.\n{{ERROR_MESSAGE}}";
					};
					success: "Settings imported successfully";
					title: "Import settings from a JSON file";
					value: "Import Settings";
				};
			};
			language: {
				select: { label: "Language"; title: "The language to use for the extension" };
				title: "Language";
			};
			miscellaneous: {
				features: {
					automaticTheaterMode: {
						label: "Automatic theater mode";
						title: "Automatically enables theater mode when you load a video";
					};
					hideScrollbar: { label: "Hide scrollbar"; title: "Hides the pages scrollbar" };
					loopButton: {
						label: "Loop button";
						title: "Adds a button to the feature menu to loop the video you're watching";
					};
					maximizePlayerButton: {
						label: "Maximize player button";
						title: "Adds a button to the feature menu to maximize the player";
					};
					openTranscriptButton: {
						label: "Open transcript button";
						title: "Adds a button to the feature menu to open the transcript of the video you're watching";
					};
					openYouTubeSettingsOnHover: {
						label: "Open YouTube settings on hover";
						title: "Opens the YouTube settings menu when you hover over the settings button";
					};
					remainingTime: {
						label: "Remaining time";
						title: "Shows the remaining time of the video you're watching";
					};
					rememberLastVolume: {
						label: "Remember last volume";
						title: "Remembers the volume of the last video you were watching and sets it when you open a new video";
					};
					removeRedirect: {
						label: "Remove YouTube /redirect URLs";
						title: "Replaces YouTube redirect by actual URLs, skipping redirect warning dialogue";
					};
					shareShortener: {
						label: "Shorten YouTube video share link";
						title: "Shortens YouTube video share link (youtu.be) by stripping si/feature parameters from it";
					};
				};
				title: "Miscellaneous settings";
			};
			onScreenDisplaySettings: {
				color: {
					label: "Color";
					options: {
						blue: "Blue";
						green: "Green";
						orange: "Orange";
						pink: "Pink";
						purple: "Purple";
						red: "Red";
						white: "White";
						yellow: "Yellow";
					};
					title: "Select the color for the On-Screen Display";
				};
				hide: {
					label: "Hide Delay";
					title: "Specify the time, in milliseconds, before automatically hiding the On-Screen Display";
				};
				opacity: { label: "Opacity"; title: "Adjust the transparency of the On-Screen Display" };
				padding: {
					label: "Padding";
					title: "Adjust the spacing around the On-Screen Display in pixels. This applies specifically to corner On-Screen Display.";
				};
				position: {
					label: "Position";
					options: {
						bottom_left: "Bottom Left";
						bottom_right: "Bottom Right";
						center: "Center";
						top_left: "Top Left";
						top_right: "Top Right";
					};
					title: "Select the position of the On-Screen Display";
				};
				title: "On-Screen Display Settings";
				type: {
					label: "Type";
					options: { line: "Line"; no_display: "No display"; round: "Round"; text: "Text" };
					title: "Select the type of On-Screen Display";
				};
			};
			playbackSpeed: {
				enable: {
					label: "Forced playback speed";
					title: "Sets the video speed to what you choose below";
				};
				select: { label: "Player speed"; title: "The speed to set the video to" };
				title: "Playback speed settings";
			};
			screenshotButton: {
				enable: {
					label: "Screenshot button";
					title: "Adds a button to the player to take a screenshot of the video";
				};
				saveAs: { clipboard: "Clipboard"; file: "File" };
				selectFormat: { label: "Screenshot format"; title: "The format to save the screenshot in" };
				selectSaveAs: { label: "Screenshot save type"; title: "The screenshot save type" };
				title: "Screenshot settings";
			};
			scrollWheelSpeedControl: {
				adjustmentSteps: { label: "Speed Change Per Scroll"; title: "Adjust the speed change per scroll" };
				enable: {
					label: "Scroll wheel speed control";
					title: "Press a modifier key to enable speed adjustment with the scroll wheel.";
				};
				optionLabel: "{{KEY}} key";
				select: { label: "Modifier key"; title: "The modifier key to use" };
				title: "Scroll wheel speed control settings";
			};
			scrollWheelVolumeControl: {
				adjustmentSteps: {
					label: "Volume Change Per Scroll";
					title: "Adjust the volume change per scroll";
				};
				enable: {
					label: "Scroll wheel volume control";
					title: "Lets you use the scroll wheel to control the volume of the video you're watching";
				};
				holdModifierKey: {
					enable: {
						label: "Enable when holding modifier key";
						title: "Press a modifier key to enable volume adjustment with the scroll wheel.";
					};
					optionLabel: "{{KEY}} key";
					select: { label: "Modifier key"; title: "The modifier key to use" };
				};
				holdRightClick: {
					enable: {
						label: "Enable when holding right click";
						title: "Hold right click to enable scroll wheel volume control";
					};
				};
				title: "Scroll wheel volume control settings";
			};
			videoHistory: {
				enable: {
					label: "Track watched videos";
					title: "Keeps track of where you left off on videos you were watching and enables resuming playback";
				};
				resumeType: {
					select: {
						label: "Resume type";
						options: { automatic: "Automatic"; prompt: "Prompt" };
						title: "Select how you want to resume videos";
					};
				};
				title: "Video history settings";
			};
			volumeBoost: {
				boostAmount: { label: "Volume boost amount (dB)"; title: "The amount to boost the volume by" };
				enable: { label: "Volume boost"; title: "Enable volume boost" };
				mode: {
					select: {
						label: "Volume boost mode";
						options: { global: "Global"; perVideo: "Per video" };
						title: "Choose how volume boost is applied. 'Per video' allows enabling boost for each video individually in the feature menu. 'Global' applies boost to all videos when volume boost is enabled.";
					};
				};
				title: "Volume boost settings";
			};
		};
	};
}

declare const EnUS: EnUS;

export = EnUS;
