import React, { Component } from 'react';
import renderSelect from '../../../components/ReduxComponents/renderSelect';

import { Field } from 'redux-form';


class CountryInfo extends Component {
    render() {
        return (
            <div>
                <div className="gm-align_left">
                    <label className="custom-label">Country of Citizenship</label>
                    <Field
                        name="citizenCtry"
                        className="mandatory-fields gm-display_inlineBlock"
                        component={renderSelect}
                        entity="country"
                        list={[
                            { "id": "ind", "name": "USA" },
                            { "id": "ind1", "name": "UK" },
                            { "id": "ind2", "name": "JPN" },
                        ]}>
                    </Field>
                    <br />
                    <label className="custom-label">Country of Tax Residence</label>
                    <Field
                        name="taxCountry"
                        entity="country"
                        className="mandatory-fields gm-display_inlineBlock"
                        component={renderSelect}
                        list={[
                            { "id": "ind", "name": "USA" },
                            { "id": "ind1", "name": "UK" },
                            { "id": "ind2", "name": "JPN" },
                        ] || []}>
                        <br />

                    </Field>
                </div>
            </div>
        );
    }
}

export default CountryInfo;