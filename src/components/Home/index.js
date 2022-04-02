/*
 * Copyright © 2022 Durudex

 * This file is part of Durudex: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.

 * Durudex is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with Durudex. If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: (
      <Translate id='feature.title.freedom' description='Feature title freedom'>
        Freedom
      </Translate>
    ),
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <Translate id='feature.description.freedom' description='Feature description freedom'>
        Is an important part, you will be limited only by community rules.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id='feature.title.voting' description='Feature title voting'>
        Users Choice
      </Translate>
    ),
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <Translate id='feature.description.voting' description='Feature description voting'>
        Users will vote for all important issues.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id='feature.title.openness' description='Feature title openness'>
        Open Source
      </Translate>
    ),
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <Translate id='feature.description.openness' description='Feature description openness'>
        All source code is open, you can use or modify it.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomeFeature() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
