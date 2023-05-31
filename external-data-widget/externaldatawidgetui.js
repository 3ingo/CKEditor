// external-data-widget/externaldatawidgetui.js

import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';

// import BitcoinLogoIcon from './theme/bitcoin-logo.svg';

class ExternalDataWidgetUI extends Plugin {
    init() {
        const editor = this.editor;
        const externalWidgetCommand = editor.commands.get( 'external' );

        // The "external" button must be registered among the UI components of the editor
        // to be displayed in the toolbar.
        editor.ui.componentFactory.add( 'external', locale => {
            const button = new ButtonView( locale );

            button.set( {
                label: 'Bitcoin rate',
                tooltip: true,
                withText: false,
                // icon: BitcoinLogoIcon
            } );

            // Disable the external data widget button when the command is disabled.
            button.bind( 'isEnabled' ).to( externalWidgetCommand );

            // Execute the command when the button is clicked (executed).
            button.on( 'execute', () => {
                editor.execute( 'external' );
                // Set focus on the editor content
                editor.editing.view.focus();
            } );

            return button;
        } );
    }
}
