---
title: "NBA Scores: An Alfred Workflow"
date: 2022-10-24
extra:
  featured: true
  link: https://alfred.app/workflows/bjornelvar/nba-scores/
  image: /media/alfred_nba_scores.png
description: "*Featured on Alfred Gallery!*
	<ul>
		<li>Shows you today's games.</li>
    	<li>Games in progress will take you to the box score section.</li>
        <li>Games that have finished will take you to the summary section.</li>
        <li>Also lists the stat leaders for all teams.</li>
	</ul>"
taxonomies:
  tags:
    - Python
    - API
    - Alfred
    - Workflow
---
<!-- ### [NBA Scores: An Alfred Workflow](https://alfred.app/workflows/bjornelvar/nba-scores/) -->
![NBA Scores GIF](/media/alfred_nba_scores_20221022.gif)
#### <i>\*Featured on Alfred Gallery!*</i>
### Description
One evening, my partner asked me what games were on tonight and I instinctively went to type `nba` in Alfred. I of course didn't have any workflow for it, so I decided to build one myself. I used the [NBA API](https://pypi.org/project/nba-api/) to get the data and then built a workflow around it using Python. And *a lot* of JSON parsing.

If you're interested in that kind of stuff, you can check out my [Github repository](https://github.com/bjornelvar/alfred_nba_scores).

### How to use it:
* An Alfred Powerpack is required. (Sorry)
* Download the workflow from [Alfred Gallery](https://alfred.app/workflows/bjornelvar/nba-scores/).
* Double click it to install.
* Type `nba` in Alfred.
* Press enter or use the built-in hotkey on a game to see the box score or summary.

### Examples
![NBA Scores Pre](/media/alfred_nba_scores_pre.png)
![NBA Scores Small](/media/alfred_nba_scores_small.png)


### Credits
* [NBA API](https://pypi.org/project/nba-api/)
* Kristjana Ósk for asking me what games were on tonight.
