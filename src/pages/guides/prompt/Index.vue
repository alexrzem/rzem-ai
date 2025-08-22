<template>
    <header class="relative bg-zinc-100 shadow-sm">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">FLUX.1</h1>
            <p><em>A Guide for FLUX.1</em></p>
        </div>
    </header>
    <main>
        <div class="content">
            <h2 id="introduction">Introduction</h2>
            <p
                >This guide will help you maximise the benefits of FLUX.1, an AI tool for creating high-quality images. Whether you're new to AI image generation or have some experience, this guide will walk you through the basics of
                crafting effective prompts. You'll learn how to create images that are visually stunning, detailed, and aligned with your vision.</p
            >

            <div class="rounded-md bg-blue-50 p-4 m-4">
                <div class="flex">
                    <div class="shrink-0">
                        <fa :icon="['far', 'circle-exclamation']" class="text-blue-700 text-lg pt-1" />
                    </div>
                    <div class="ml-3">
                        <div class="text-lg font-medium text-blue-700">Note on Model Variability</div>
                        <div class="mt-2 text-sm text-blue-600">
                            <p>
                                FLUX.1 is a versatile tool, but it's important to remember that different FLUX models (e.g., FLUX.1 [<strong>pro</strong>], [<strong>dev</strong>], [<strong>schnell</strong>]) may produce varying results from
                                the same prompt. Additionally, factors such as LoRAs (Low-Rank Adaptations) and other variables can also influence the output. Experimentation is key to understanding how your chosen model interprets prompts,
                                so don't be afraid to tweak and refine your approach based on the results you get.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 id="variants">Variants</h3>
            <p>FLUX.1 is available in three main variants:</p>

            <dl>
                <dt>FLUX.1 [pro]</dt>
                <dd
                    >The flagship model, offering state-of-the-art performance in image generation. It excels in prompt following, visual quality, image detail, and output diversity. This version is ideal for professional use and high-end
                    applications.</dd
                >

                <dt>FLUX.1 [dev]</dt>
                <dd>An open-weight, guidance-distilled model designed for non-commercial applications. It offers similar quality to the Pro version but with improved efficiency, making it suitable for developers and researchers.</dd>

                <dt>FLUX.1 [schnell]</dt>
                <dd>The fastest model in the suite, optimised for local development and personal use. It's openly available under an Apache 2.0 license, making it accessible for a wide range of users.</dd>
            </dl>

            <h3 id="configuration-settings">Configuration Settings</h3>
            <p>While a well-crafted prompt is essential, optimising <strong>FLUX.1 [dev]</strong>'s settings is equally important to be able to achieve high-quality results.</p>
            <p>Here's a breakdown of key configuration parameters:</p>

            <dl>
                <dt>Seed Value</dt>
                <dd>The seed value ensures consistency in generated images. A random, but fixed value can be reused to replicate specific outputs. In this guide, we use a seed value of 42.</dd>

                <dt>Image Dimensions</dt>
                <dd>Set dimensions, such as <strong>1024</strong> x <strong>1024</strong> pixels, for optimal image quality and file size.</dd>

                <dt>Guidance Scale</dt>
                <dd>A guidance scale of <strong>3.5</strong> strikes a balance between creativity and adherence to prompt specificity.</dd>

                <dt>Inference Scale</dt>
                <dd>Setting <strong>50</strong> inference steps ensures detailed images, with the model given enough iterations to fine-tune the visual output.</dd>

                <dt>Number of Images</dt>
                <dd
                    >Start with a single image generation (Num Images = 1) to iterate efficiently. These settings allow <strong>FLUX.1 [dev]</strong> to maintain focus on your prompt's specific elements while also delivering creative
                    outputs.</dd
                >
            </dl>

            <h2 id="descriptive-language">Descriptive Language</h2>
            <h3 id="precision-and-clarity">Precision and Clarity</h3>
            <p>
                FLUX.1 responds best to precise and explicit language. Vague terms like <em>nice</em> or <em>beautiful</em> can lead to ambiguous results. Instead, use specific descriptors that clearly define the image you want to create.
            </p>
            <p>Precision helps FLUX.1 understand your intent, reducing the likelihood of unexpected or off-target results.</p>
            <p>Focus on details such as colours, textures, styles, and specific elements in your prompt.</p>

            <h4 id="example-prompt">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/bb430d01-e3fc-4090-ba40-a68d858ca455.png" prompt="A sunset landscape" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/6f0853ee-cb56-49cd-970d-a4d4faaa0123.png"
                    prompt="A vibrant orange and pink sunset over a snow-capped mountain range, with soft, wispy clouds reflecting off a calm lake in the foreground" />
            </PromptCards>

            <p>The revised prompt provides specific details about the colours, textures, and elements in the scene, ensuring FLUX.1 generates a more accurate and visually appealing image.</p>
            <h3 id="dynamic-language">Dynamic Language</h3>
            <p>Dynamic and Active Language. Creating Movement and Engagement.</p>
            <p>Using dynamic and active language in your prompts can make your images feel more alive and engaging. Instead of describing static scenes, you can describe actions and movements.</p>
            <p>Active language helps FLUX.1 create images that feel dynamic and full of energy.</p>
            <p>Use verbs and action-oriented descriptions to bring your scenes to life.</p>

            <h4 id="example-prompt-1">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/bcb76cb4-28ad-44d7-a9a5-e5916f2aa831.png" prompt="A mountain peak" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/fc516cef-8c30-4040-9940-07415dd4833a.png"
                    prompt="A majestic mountain peak emerging through swirling morning mist, with golden sunrise light catching the crystalline ice formations" />
            </PromptCards>

            <p>The revised prompt uses active language to create a sense of movement and drama in the image.</p>
            <h3 id="use-artistic-references">Use Artistic References</h3>
            <p>Referencing specific artists, art movements, or styles can help guide FLUX.1's output.</p>
            <h4 id="example-prompt-2">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    img="/guides/prompt/25ce5522-9ce8-4cc2-ac34-c5ea4628512b.png"
                    prompt="A painting of a futuristic cityscape with tall glowing skyscrapers in the style of Vincent van Gogh's “Starry Night”. Swirling, expressive brushstrokes and vibrant colour palette of the original, emphasising deep blues and bright yellows" />
                <PromptCard
                    img="/guides/prompt/8e2c72ba-e359-4926-b614-b36a0f92793e.png"
                    seed="793918921"
                    prompt="A painting of a futuristic cityscape with tall glowing skyscrapers in the style of Vincent van Gogh's “Starry Night”. Swirling, expressive brushstrokes and vibrant colour palette of the original, emphasising deep blues and bright yellows" />
            </PromptCards>

            <h3 id="blend-concepts">Blend Concepts</h3>
            <p>FLUX.1 excels at combining diverse ideas and themes to create distinctive images. Combine multiple artistic styles to create unique visual experiences.</p>

            <h4 id="example-prompt-3">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    img="/guides/prompt/964116ef-6899-449b-b065-b18ceea30e13.png"
                    prompt="Illustration of 'The Last Supper' by Leonardo da Vinci, but reimagine it with robots in a futuristic setting. Maintain the composition and dramatic lighting of the original painting, but replace the apostles with various types of androids and cyborgs. The table should be a long, sleek metal surface with holographic displays. In place of bread and wine, have the robots interfacing with glowing data streams" />
            </PromptCards>

            <h4 id="example-prompt-4">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    img="/guides/prompt/bd4e090c-0b94-4456-98a8-f2cc49abc51c.png"
                    prompt="A sketch that fuses the precision of M.C. Escher's impossible geometries with the bold colours and shapes of Wassily Kandinsky's abstract compositions. The subject should be a surreal cityscape where buildings seamlessly transform into musical instruments. Use Escher's techniques to create paradoxical perspectives and interconnected structures, but render them in Kandinsky's vibrant, non-representational style. Incorporate musical notations and abstract shapes that flow through the scene, connecting the architectural elements seamlessly. The colour palette should be rich and varied, with particular emphasis on deep blues, vibrant reds, and golden yellows" />
            </PromptCards>

            <h3 id="temporal-narratives">Temporal Narratives</h3>
            <p>Challenge FLUX.1 to convey a sense of time passing or a story unfolding within a single image.</p>

            <h4 id="example-prompt-5">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    img="/guides/prompt/9a006af6-edcc-4a8d-ab3e-9043da859ef8.png"
                    prompt="A dramatic, cinematic close-up illustration of monarch butterfly metamorphosis captured as four interconnected macro photography shots blended into one seamless composition. Shot with a 100mm macro lens at f/8 for maximum detail and depth. The leftmost section shows milkweed eggs in extreme close-up, revealing their ribbed surface texture and translucent quality against the rich green leaf surface with clearly visible plant cells and tiny hairs. Transition to the second section featuring a striped caterpillar in sharp focus, with individual bristles visible and mandibles actively chewing leaf tissue, capturing the dynamic action of feeding. The third section presents the chrysalis stage with stunning detail of the smooth, jade-colored surface and metallic gold band, with subtle reflections and the faint outline of developing wing patterns visible through the semi-transparent casing. The final section showcases the adult butterfly emerging or freshly emerged, with wings displaying every intricate detail of the orange and black pattern, individual scales visible, and wing membranes catching dramatic side lighting. The background employs shallow depth of field with beautiful bokeh effects, transitioning from cool blue-green tones on the left to warm golden hour lighting on the right. Each section maintains photographic realism while the overall composition tells the complete story of transformation with cinematic drama and precision." />
                <PromptCard
                    img="/guides/prompt/c87d98da-a3ad-42ed-a42a-1c02b49b0dd1.png"
                    prompt="A flowing watercolor painting depicting the monarch butterfly life cycle as a continuous narrative across four blended sections. The composition flows like a gentle stream from left to right, with soft watercolor transitions between each metamorphosis stage. Begin with delicate milkweed plants rendered in soft greens and yellows, where tiny pearl-like eggs rest on leaf undersides painted with translucent washes. The scene flows into watercolor caterpillars with bold black, white, and yellow stripes feeding among vibrant green foliage, with loose, expressive brushstrokes. The middle section features an elegant chrysalis painted in luminous jade green with metallic gold accents, suspended from gracefully arching branches rendered in warm browns and ochres. The final section bursts with a magnificent monarch butterfly painted in rich oranges and deep blacks, with white spots delicately dotted along wing edges. The entire composition uses a warm, natural palette transitioning from cool morning hues to golden sunset tones. Soft, atmospheric background washes suggest the passage of time and seasons, with botanical elements painted in loose, organic brushstrokes that emphasize the natural beauty of transformation." />
            </PromptCards>

            <h3 id="emotional-gradients">Emotional Gradients</h3>
            <p>Direct FLUX.1 to create images that convey a progression of emotions or moods.</p>
            <h4 id="example-prompt-6">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    img="/guides/prompt/a83b40b9-5a28-492c-b7a5-67ede413e344.png"
                    prompt="A panoramic image that depicts the progression of a person's emotional journey from despair to hope. The scene should be a long, winding road that starts in a dark, stormy landscape and gradually transitions to a bright, sunlit meadow." />
            </PromptCards>

            <h3 id="use-contrast-and-juxtaposition">Use Contrast and Juxtaposition</h3>
            <p>Creating contrast within your prompt can lead to visually striking and thought-provoking images.</p>

            <h4 id="example-prompt-7">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    img="/guides/prompt/ff32ca19-4c09-46fd-a8d5-d6c4be7e73c3.png"
                    prompt="A juxtaposition of the delicate beauty of nature with the harsh reality of urban decay. Show a vibrant cherry blossom tree in full bloom growing out of a cracked concrete sidewalk in a dilapidated city alley. The tree should be the focal point, with its pink petals contrasting against the grey, graffiti-covered walls of surrounding buildings. Include a small bird perched on one of the branches to emphasise the theme of resilience." />
            </PromptCards>

            <h3 id="incorporate-mood-and-atmosphere">Incorporate Mood and Atmosphere</h3>
            <p>Describing the emotional tone or atmosphere can help FLUX.1 generate images with the desired feel.</p>

            <h4 id="example-prompt-8">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    img="/guides/prompt/72068097-5d3b-4c76-b90a-f67d36ba98fe.png"
                    prompt="Depict a cozy, warmly lit bookstore cafe on a rainy evening. The atmosphere should be inviting and nostalgic, with soft yellow lighting from vintage lamps illuminating rows of well-worn books. Show patrons reading in comfortable armchairs, steam rising from their coffee cups. The large front window should reveal a glistening wet street outside, with blurred lights from passing cars. Emphasise the contrast between the warm interior and the cool, rainy exterior." />
            </PromptCards>

            <h3 id="unusual-perspectives">Unusual Perspectives</h3>
            <p>Challenging FLUX.1 with unique viewpoints can result in visually interesting images.</p>

            <h4 id="example-prompt-9">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    img="/guides/prompt/30b6c3e7-62d1-4521-a703-74f41350ac56.png"
                    prompt="A “bug's-eye view” of a picnic in a lush garden. The perspective should be from ground level, looking up at towering blades of grass and wildflowers that frame the scene. In the distance, show the underside of a red and white checkered picnic blanket with the silhouettes of picnic foods and human figures visible through the semi-transparent fabric. Include a few ants in the foreground carrying crumbs, and a ladybug climbing a blade of grass. The lighting should be warm and dappled, as if filtering through leaves." />
            </PromptCards>

            <h2 id="hierarchical-structure">Hierarchical Structure</h2>

            <h3 id="layered-compositions-and-clear-placement">Layered Compositions and Clear Placement</h3>

            <p>FLUX.1 allows you to define the placement of objects in different layers: foreground, middle ground, and background. This helps create depth and complexity in your images.</p>
            <p>Layered compositions make images more dynamic and visually interesting. Precise placement ensures that FLUX.1 positions elements correctly, avoiding cluttered or unbalanced compositions.</p>
            <p>Organise your prompt hierarchically, specifying where each element should appear (e.g., foreground, middle ground, background).</p>

            <h4 id="example-prompt-10">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/fe768722-57a3-49a5-b737-db00700dd3e8.png" prompt="A terrarium with plants and a neon sign" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/a13b4e45-c45d-4770-8870-22e00a4e67bc.png"
                    prompt="A hanging glass terrarium featuring a miniature rainforest scene with colourful orchids and tiny waterfalls (foreground). Just beyond the glass, a neon sign reads ‘Rainforest Retreat' in bright green and yellow letters (middle ground). The rain-soaked glass creates a beautiful distortion, adding a soft glow to the sign's vibrant colours (background)." />
            </PromptCards>

            <p>The revised prompt clearly defines the placement of each element, creating a layered and visually rich composition.</p>
            <h2 id="contrasting-colors-and-aesthetics">Contrasting Colors and Aesthetics</h2>
            <h3 id="using-contrasts-for-visual-impact">Using Contrasts for Visual Impact</h3>
            <p>Contrasting colours and aesthetics can make your images more striking and memorable. For example, you can create a scene where one side is bright and cheerful, while the other is dark and moody.</p>
            <p>Contrasts draw the viewer's attention and add depth to your images, making them more engaging.</p>
            <p>Describe the contrasting elements clearly and specify how they interact (e.g., sharp transition or soft blending).</p>

            <h4 id="example-prompt-11">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/f59001f5-e3e8-49ac-9171-88ed557a89cc.png" prompt="A tree in a field" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/9036c420-b838-4427-9376-8755455b35e3.png"
                    prompt="A single tree stands in the middle of the image. The left half of the tree features bright, vibrant green leaves under a sunny blue sky, while the right half has bare branches covered in frost, set against a cold, dark, and thunderous sky. On the left, there's lush green grass; on the right, thick snow. The split is sharp, with the transition happening right down the middle of the tree." />
            </PromptCards>

            <p>The revised prompt uses contrasting colours and aesthetics to create a visually striking image.</p>
            <h3 id="describing-transitions">Describing Transitions</h3>
            <p>When using contrasting elements, you can control how they transition from one to the other. The transition can be sharp and abrupt or soft and blended.</p>
            <p>The type of transition affects the mood and visual flow of the image.</p>
            <p>Specify whether the transition should be sharp or blended, and describe how the elements interact at the boundary.</p>

            <h4 id="example-prompt-12">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/4f57790f-d507-4a4a-b808-09da6ab320ff.png" prompt="A landscape with a sunny side and a rainy side" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/d4e52e53-aa99-40ee-bfb2-3a72125a55c3.png"
                    prompt="A landscape where the left side is sunny and bright, with golden fields and a clear blue sky, while the right side is rainy and dark, with storm clouds and wet grass. The transition between the two sides is soft and blended, creating a dreamy effect." />
            </PromptCards>

            <p>The revised prompt describes a soft transition between contrasting elements, adding a dreamy quality to the image.</p>

            <h2 id="see-through-materials-and-textures">See-Through Materials and Textures</h2>
            <h3 id="transparent-materials">Transparent Materials</h3>
            <p>FLUX.1 can create images with transparent materials, such as glass, ice, or plastic. These materials add depth and realism to your images.</p>
            <p>Transparent materials allow you to create complex compositions where objects or text are visible through other elements.</p>
            <p>Clearly describe the transparent material and what is visible behind it.</p>
            <h4 id="example-prompt-13">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/b1947351-ca50-4e1c-94ef-370753f9cbc6.png" prompt="A neon sign in a room" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/fb8efe96-7bf7-4ac3-bf67-696997c2ccc9.png"
                    prompt="A neon sign reading ‘Rainforest Retreat' is visible through a rain-soaked glass window. The glass creates a beautiful distortion, adding a soft glow to the sign's vibrant colours." />
            </PromptCards>

            <p>The revised prompt uses a transparent material (glass) to create a visually interesting effect.</p>
            <h3 id="textures-and-reflections">Textures and Reflections</h3>
            <p>Textures and reflections can add realism and depth to your images, enhancing their visual appeal. For example, you can describe how light reflects off a glass surface or how textures like frost or water droplets appear.</p>
            <p>Textures and reflections make your images more lifelike and engaging.</p>
            <p>Describe the texture or reflection in detail, including how it interacts with light and other elements in the scene.</p>
            <h4 id="example-prompt-14">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/fd117707-f8dc-44e4-8d36-2d5c41182208.png" prompt="A glass of water" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/c60993d5-1330-4b49-8b26-cb69a7d51df3.png"
                    prompt="A glass of water on a wooden table, with light reflecting off the surface of the glass. The glass is covered in tiny water droplets, and the table has a rough, textured finish" />
            </PromptCards>

            <p>The revised prompt adds textures and reflections to create a more realistic image.</p>
            <h2 id="technical-parameters">Technical Parameters</h2>
            <p><strong>Note on Technical Parameters</strong></p>
            <p>
                This section explores advanced techniques for enhancing realism and control in your images. However, keep in mind that the effectiveness of these parameters (e.g., camera devices, lenses, settings) can vary depending on the
                FLUX model you're using, as well as other factors like LoRAs and training data. These tips are highly experimental, so feel free to adjust or omit them based on your specific needs and the model's behaviour.
            </p>
            <h3 id="camera-devices">Camera Devices</h3>
            <p>Different cameras produce different looks and feels in images. For example, a smartphone camera may convey a casual, everyday vibe, while a professional DSLR camera can produce sharp, high-quality images.</p>
            <p>Specifying a camera helps FLUX.1 mimic the style and quality of real-world photography.</p>

            <h4 id="common-cameras-and-their-uses">Common Cameras and Their Uses</h4>

            <div class="overflow-hidden outline-1 outline-black/5 sm:rounded-lg shadow-lg">
                <table class="relative min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="data">Model </th>
                            <th scope="col" class="data">Description</th>
                            <th scope="col" class="data">Best For </th>
                            <th scope="col" class="data">Access </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr>
                            <td class="keydata">FLUX.1 [pro]</td>
                            <td class="data">Commercial, highest quality </td>
                            <td class="data">Professional work, commercial use</td>
                            <td class="data">Paid API</td>
                        </tr>
                        <tr>
                            <td class="keydata">FLUX.1 [dev]</td>
                            <td class="data">Open-source, high quality</td>
                            <td class="data">Learning, experimentation, non-commercial</td>
                            <td class="data">Free/Open</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="overflow-hidden outline-1 outline-black/5 sm:rounded-lg shadow-lg">
                <table class="relative min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="data">Camera</th>
                            <th scope="col" class="data">Best for</th>
                            <th scope="col" class="data">Example</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr class="odd">
                            <td class="keydata">iPhone (e.g., iPhone 15)</td>
                            <td class="data">Casual, modern, and everyday shots.</td>
                            <td class="data"><em>Social media posts, relatable scenes, or casual portraits</em></td>
                        </tr>
                        <tr class="even">
                            <td class="keydata">Canon EOS R5</td>
                            <td class="data">Professional, high-detail images with vibrant colors and sharp focus.</td>
                            <td class="data"><em>Landscapes, portraits, or high-quality product shots</em></td>
                        </tr>
                        <tr class="odd">
                            <td class="keydata">Sony Alpha 7R IV</td>
                            <td class="data">High-resolution images with rich textures and fine details.</td>
                            <td class="data"><em>Nature photography, architecture, or detailed close-ups</em></td>
                        </tr>
                        <tr class="even">
                            <td class="keydata">Polaroid Instant Camera</td>
                            <td class="data">Vintage, nostalgic shots with soft colors and slight imperfections.</td>
                            <td class="data"><em>Retro or artistic scenes</em></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 id="example-prompt-15">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    icon="camera"
                    iconColour="text-zinc-600"
                    title="Canon EOS R5"
                    img="/guides/prompt/93f21ef7-a36c-419d-9c47-36308db478e4.png"
                    prompt="A vibrant orange and pink sunset over a snow-capped mountain range, shot on a Canon EOS R5, capturing the vibrant colours and sharp details of the scene." />
            </PromptCards>

            <h3 id="lenses">Lenses</h3>
            <p>Lenses control how much of the scene is visible (field of view) and how much of the image is in focus (depth of field). Different lenses are suited for various types of shots.</p>

            <h4 id="common-lenses-and-their-uses">Common Lenses and Their Uses</h4>
            <div class="overflow-hidden outline-1 outline-black/5 sm:rounded-lg shadow-lg">
                <table class="relative min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="data">Lense</th>
                            <th scope="col" class="data">Length</th>
                            <th scope="col" class="data">Best for</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr class="odd">
                            <td class="keydata">iPhone (e.g., iPhone 15)</td>
                            <td class="data">Casual, modern, and everyday shots.</td>
                            <td class="data"><em>Social media posts, relatable scenes, or casual portraits</em></td>
                        </tr>
                        <tr class="odd">
                            <td class="keydata">Wide-Angle Lens</td>
                            <td class="data">16-35mm</td>
                            <td class="data">Capturing a broad view, perfect for landscapes, cityscapes, or large interiors.</td>
                        </tr>
                        <tr class="even">
                            <td class="keydata">Standard Lens</td>
                            <td class="data">50mm</td>
                            <td class="data">Everyday shots, portraits, and scenes where you want a natural perspective. It also creates a nice blurred background (bokeh).</td>
                        </tr>
                        <tr class="odd">
                            <td class="keydata">Telephoto Lens</td>
                            <td class="data">70-200mm</td>
                            <td class="data">Zooming in on distant subjects, ideal for close-ups, wildlife, or isolating a subject from the background.</td>
                        </tr>
                        <tr class="even">
                            <td class="keydata">Macro Lens</td>
                            <td class="data">100mm</td>
                            <td class="data">Extreme close-ups, perfect for capturing small details like insects, flowers, or textures.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 id="example-prompt-16">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    icon="camera"
                    iconColour="text-zinc-600"
                    title="50mm Standard Lens"
                    img="/guides/prompt/67dea24c-ec48-4e25-9ab9-a73301a6e6b8.png"
                    prompt="A portrait shot with a 50mm lens, capturing the subject's face in sharp focus with a softly blurred background" />
            </PromptCards>

            <h3 id="settings">Settings</h3>
            <p>Camera settings like aperture, ISO, and shutter speed control how light is captured, affecting the image's brightness, focus, and motion.</p>

            <h4 id="aperture-f-stop">Aperture (f-stop)</h4>
            <p>Controls how much light enters the camera and how much of the image is in focus. A low f-stop (e.g., f/2.8) creates a blurred background, while a high f-stop (e.g., f/16) keeps everything sharp.</p>

            <h4 id="iso">ISO</h4>
            <p>Controls the camera's sensitivity to light. Low ISO (e.g., 100) is best for bright scenes, while high ISO (e.g., 1600) is used in low-light conditions but can add grain or noise.</p>

            <h4 id="shutter-speed">Shutter Speed</h4>
            <p>Controls how long the camera's shutter stays open. Fast shutter speeds (e.g., 1/1000s) freeze motion, while slow shutter speeds (e.g., 30s) create motion blur or light trails.</p>
            <p>These settings help FLUX.1 mimic real-world photography techniques, adding realism to your images.</p>
            <p>Use settings to achieve specific effects. For example:</p>
            <ul class="list">
                <li> Use <em class="font-semibold">low f-stop</em> for a blurred background in portraits. </li>
                <li> Use <em class="font-semibold">high ISO</em> for low-light scenes like night cityscapes. </li>
                <li> Use <em class="font-semibold">slow shutter speed</em> to capture motion blur or light trails. </li>
            </ul>

            <h4 id="example-prompt-17">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    icon="camera"
                    iconColour="text-zinc-600"
                    title="f/8, ISO 100, 30-second shutter speed"
                    img="/guides/prompt/11513005-6fc0-416b-8408-bb20f313b08e.png"
                    prompt="A night cityscape with skyscrapers, neon signs, and car light trails, shot with f/8, ISO 100, and a 30-second shutter speed, capturing the city lights with sharp details and minimal noise." />
            </PromptCards>

            <h3 id="shot-types">Shot Types</h3>
            <p>The type of shot determines how the scene is framed and what elements are emphasised.</p>
            <ul class="list">
                <li>Wide-angle shots capture a broad view, perfect for landscapes or large scenes.</li>
                <li>Medium shots focus on a specific area, ideal for portraits or detailed scenes.</li>
                <li>Close-up shots zoom in on a subject, highlighting details like textures or expressions.</li>
            </ul>
            <p>The shot type affects the composition and focus of your image, guiding the viewer's attention.</p>
            <p>Specify the shot type to frame your image correctly.</p>
            <p>For example:</p>
            <ul class="list">
                <li>Use <em>wide-angle shot</em> for expansive landscapes.</li>
                <li>Use <em>close-up shot</em> for detailed textures or small objects.</li>
            </ul>

            <h4 id="example-prompt-18">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    icon="camera"
                    iconColour="text-zinc-600"
                    title="Wide-angle shot"
                    img="/guides/prompt/6575c4cc-eafc-4bb7-a8c2-aa8fcfcd8829.png"
                    prompt="A wide-angle shot of a mountain range at sunrise, capturing the expansive landscape with vibrant colours and sharp details." />
            </PromptCards>

            <h2 id="integrating-text">Integrating Text</h2>
            <p>FLUX.1's superior text rendering allows for creative use of text within images.</p>
            <h3 id="font-selection">Font Selection</h3>
            <p>Specifying the font ensures that text is legible and fits the image's aesthetic.</p>
            <p>Different fonts convey different moods and styles, and choosing the right font enhances the overall composition.</p>
            <p>Specify the font type (e.g., Art Deco, cursive, sans-serif) to match the image's theme.</p>
            <h4 id="example-prompt-19">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/a348e78c-1027-4b42-81dd-0325cc1f839f.png" prompt="A travel poster for Paris" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/c8cb9066-8cc8-4e76-9124-d64f3e5b3053.png"
                    prompt="A vintage travel poster for Paris. The Eiffel Tower silhouette dominates the centre, painted in warm sunset colours. At the top, ‘PARIS' is written in large, elegant Art Deco font." />
            </PromptCards>

            <p>The revised prompt specifies the font, ensuring the text complements the vintage aesthetic of the poster.</p>
            <h3 id="style-and-size">Style and Size</h3>
            <p>Defining the style (e.g., bold, italic) and size of text ensures it fits your composition.</p>
            <p>Text style and size affect readability and visual balance.</p>
            <p>Specify the style and size to ensure the text is legible and visually appealing.</p>
            <h4 id="example-prompt-20">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/1143b988-f3f1-49cc-aa72-177826a9cabd.png" prompt="A neon sign" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/e578161a-8a65-4f9f-968d-edacf14f0e7c.png"
                    prompt="A neon sign reading ‘Rainforest Retreat' in bright green and yellow letters, with a soft glow effect, placed against a dark background" />
            </PromptCards>
            <p>The revised prompt specifies the text style and effects, ensuring the sign is visually striking and legible. </p>

            <h3 id="color-palette">Color Palette</h3>
            <p>Choosing colours that harmonise with the image's overall aesthetic enhances visual appeal.</p>
            <p>Colour harmony creates a cohesive and visually pleasing image.</p>
            <p>Specify the colours for text and other elements to ensure they complement the image effectively.</p>
            <h4 id="example-prompt-21">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/1143b988-f3f1-49cc-aa72-177826a9cabd.png" prompt="A neon sign" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/109faf7a-1824-4fd6-8f06-e0411af74501.png"
                    prompt="A neon sign reading ‘Rainforest Retreat' in bright green and yellow letters against a dark background, with a soft glow effect" />
            </PromptCards>

            <h3 id="text-effects">Text Effects</h3>
            <p>Describing effects like glow, shadow, or embossing enhances the appearance of text.</p>
            <p>Text effects add depth and visual interest to the image.</p>
            <p>Specify the effects to make the text more dynamic and engaging.</p>
            <h4 id="example-prompt-22">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/1143b988-f3f1-49cc-aa72-177826a9cabd.png" prompt="A neon sign" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/55f8dceb-5813-4249-a124-a6d158c4772f.png"
                    prompt="A neon sign reading ‘Rainforest Retreat' in bright green and yellow letters, with a soft glow effect and a subtle shadow, placed against a dark background" />
            </PromptCards>
            <p>The revised prompt specifies the text effects, ensuring the sign is visually striking and legible.</p>

            <h2 id="advanced-techniques">Advanced Techniques</h2>
            <p>For complex scenes, consider breaking down your prompt into layers, focusing on different elements of the image.</p>

            <h4 id="example-prompt-23">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/28974d2d-29d5-479f-b052-9171fe9e7df3.png"
                    prompt="A bustling marketplace in a fantastical floating city. Layer 1 (Background): Depict a city of interconnected floating islands suspended in a pastel sky. The islands should have a mix of whimsical architectural styles, from towering spires to quaint cottages. Show distant airships and flying creatures in the background. Layer 2 (Middle ground): Focus on the main marketplace area. Illustrate a vast plaza with colourful stalls and shops selling exotic goods. Include floating platforms that serve as walkways between different sections of the market. Layer 3 (Foreground): Populate the scene with a diverse array of fantasy creatures and humanoids. Show vendors calling out to customers, children chasing magical floating bubbles, and a street performer juggling balls of light. In the immediate foreground, depict a detailed stall selling glowing potions and mystical artifacts. Atmosphere: The overall mood should be vibrant and magical, with soft, ethereal lighting that emphasises the fantastical nature of the scene." />
            </PromptCards>

            <h2 id="avoiding-common-mistakes">Avoiding Common Mistakes</h2>
            <h3 id="incorrect-syntax">Incorrect Syntax</h3>
            <p
                >Avoid using syntax from other AI tools (e.g., Stable Diffusion). FLUX.1 has its quirks and preferences. For example, “colourful garden (with a single rose)++” would mean the user wants to emphasise the “with a single rose”
                part of the prompt.</p
            >
            <p>Using incorrect syntax can confuse FLUX.1 and lead to unexpected results.</p>
            <p>Stick to FLUX.1's preferred syntax and avoid importing syntax from other tools. Use phrases such as “with emphasis on” or “with a focus on” in your prompt to guide the AI in the right direction.</p>

            <h4 id="example-prompt-24">Example Prompt</h4>
            <PromptCards>
                <PromptCard icon="message-xmark" iconColour="text-rose-800" title="Before" img="/guides/prompt/9fb888e2-1d3d-47e5-8c3b-c1ff155cb010.png" prompt="A teddy bear (best quality, ultra-detailed)" />
                <PromptCard icon="message-check" iconColour="text-emerald-700" title="After" img="/guides/prompt/589ac31a-d33d-4b2c-8e03-c4f0b4e711cc.png" prompt="A teddy bear Highly detailed and vibrant" />
            </PromptCards>
            <p>The revised prompt uses FLUX.1's preferred syntax, ensuring clarity and accuracy.</p>

            <h3 id="overcomplicating-prompts">Overcomplicating Prompts</h3>
            <p>Keep prompts concise and focused. Avoid listing unnecessary details that may confuse the model.</p>
            <p>Overcomplicated prompts can lead to cluttered or off-target results.</p>
            <p>Focus on the essential elements and avoid unnecessary details.</p>

            <h4 id="example-prompt-25">Example Prompt</h4>
            <PromptCards>
                <PromptCard
                    icon="message-xmark"
                    iconColour="text-rose-800"
                    title="Before"
                    img="/guides/prompt/720e4602-b10b-4610-b077-89044cdbce8e.png"
                    prompt="A beautiful sunset with a nice mountain range, some trees, a river, and a few birds flying in the sky" />
                <PromptCard
                    icon="message-check"
                    iconColour="text-emerald-700"
                    title="After"
                    img="/guides/prompt/2cfe058e-8516-4020-b880-8b45dfe9b0a8.png"
                    prompt="A vibrant orange and pink sunset over a snow-capped mountain range with a calm river in the foreground" />
            </PromptCards>

            <p>The revised prompt is concise and focused, ensuring FLUX.1 generates a clear and visually appealing image.</p>
            <h3 id="white-background-in-dev">“White background” in [dev]</h3>
            <p
                >Are you getting fuzzy outputs from FLUX.1? If your prompt has a “white background,” it might be to blame. It's worth noting that this issue only affects the [<strong>dev</strong>] variant; it doesn't occur in
                [<strong>schnell</strong>].</p
            >
            <p>https://getimg.ai/blog/flux-1-generating-blurry-images-heres-how-to-fix-it</p>
            <p>Do not use the “white background” phrase in your prompt.</p>
            <h2 id="conclusion">Conclusion</h2>
            <p>
                By following this manual, you can unlock FLUX.1's full potential and create stunning, precise images. Remember to be clear, detailed, and organised in your prompts. With practice, you'll master the art of prompting for
                FLUX.1 and achieve results that exceed your expectations. However, please note that this guide is not exhaustive. FLUX.1 is a complex tool, and experimentation is key to discovering its full capabilities. Happy prompting!
            </p>
        </div>
    </main>
</template>

<script setup>
import {ref} from 'vue';
</script>
