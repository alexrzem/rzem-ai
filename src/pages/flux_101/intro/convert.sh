#!/bin/bash

pandoc --standalone --embed-resources --css=style.css flux_course_overview.md -o flux_course_overview_e.html
pandoc --standalone --css=style.css flux_course_overview.md -o flux_course_overview.html

pandoc --standalone --embed-resources --css=style.css lesson1_guide.md -o lesson1_guide_e.html
pandoc --standalone --css=style.css lesson1_guide.md -o lesson1_guide.html

pandoc --standalone --embed-resources --css=style.css lesson2_guide.md -o lesson2_guide_e.html
pandoc --standalone --css=style.css lesson2_guide.md -o lesson2_guide.html

pandoc --standalone --embed-resources --css=style.css lesson3_guide.md -o lesson3_guide_e.html
pandoc --standalone --css=style.css lesson3_guide.md -o lesson3_guide.html

pandoc --standalone --embed-resources --css=style.css lesson4_guide.md -o lesson4_guide_e.html
pandoc --standalone --css=style.css lesson4_guide.md -o lesson4_guide.html

pandoc --standalone --embed-resources --css=style.css prompt_guide.md -o prompt_guide_e.html
pandoc --standalone --css=style.css prompt_guide.md -o prompt_guide.html
