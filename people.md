<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>People</title>
    <style>
        .image-container {
            display: flex; /* Aligns the images in a row */
            justify-content: center; /* Centers the images horizontally */
            gap: 100px; /* Adds space between the images */
            margin-bottom: 50px;
        }

        .image-container3 {
            display: flex; /* Aligns the images in a row */
            justify-content: center; /* Centers the images horizontally */
            gap: 30px; /* Adds space between the images */
            margin-bottom: 50px;
        }

        .image-container2 {
            display: flex; /* Aligns the images in a row */
            flex-wrap: wrap; /* Allows items to move to the next row */
            justify-content: center; /* Centers the images horizontally */
            gap: 30px; /* Adds space between the images */
            margin-bottom: 50px;
        }

        body{
            background-color: #ffffff;
            font-family: 'Trebuchet MS', sans-serif;
            text-align: center;
        }

        .image-item {
            text-align: center; /* Center the text (caption) below the image */
        }

        .image-item p {
            margin-top: 10px; /* Adds space between the image and its caption */
        }

        .image-item img {
            width: 300px; /* Adjust the width of the images */
            height: 400px; /* Maintain aspect ratio */
            object-fit: cover;
            border-radius: 10px;
        }

        .image-item2 img {
            width: 300px; /* Adjust the width of the images */
            height: 300px; /* Maintain aspect ratio */
            object-fit: cover;
            border-radius: 10px;
        }

        .image-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
            transition: all 0.3s ease-in-out;
        }

        .image-wrapper img {
            width: 200px; /* Adjust the width of the images */
            height: 300px;
            object-fit: cover; /* Ensures images maintain aspect ratio while filling the space */
            transition: all 0.3s ease-in-out;
            border-radius: 10px;
        }

        /*.image-wrapper:hover {
            width: 100%; /* Make it take the full width, pushing others down*
        } */

        .image-wrapper:hover img {
            width: 350px; /* Adjust the width of the images */
            height: 500px;
            object-fit: cover; /* Ensures images maintain aspect ratio while filling the space */
            border-radius: 10px;
        }

        .image-wrapper .hover-text {
            display: none;
            text-align: center;
            margin-top: 10px;
            font-size: 16px;
        }

        .image-wrapper:hover .hover-text {
            display: block; /* Show text on hover */
        }

        .image-wrapper p {
            width: 100%; /* Ensures text wraps within the image width */
            word-wrap: break-word; /* Forces long words to break and wrap */
            overflow-wrap: break-word;
            margin-top: 5px; /* Adds space between the image and its caption */
            text-align: center; /* Centers text */
        }
        

        h1 {
            text-align: center;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            margin-top: 30px;
            margin-bottom: 50px;
        }

        h2{
            text-align: center;
            font-weight: 500;
            font-family: 'Trebuchet MS', sans-serif;
            font-weight: bold;
        }

        h3{
            text-align: center;
            font-weight: 300;
            font-family: 'Trebuchet MS', sans-serif;
            font-weight: bold;
            width: 100%; /* Ensures text wraps within the image width */
            word-wrap: break-word; /* Forces long words to break and wrap */
            overflow-wrap: break-word;
            margin-top: 5px; /* Adds space between the image and its caption */
            text-align: center; /* Centers text */
        }

        .highlight{
            background-color: #a0dbff;
            color: white;
            padding-left: -10px;
            padding-right: -10px;
            padding-top: 30px;
            padding-bottom: 30px;
        }

        a {
            color: rgb(189, 229, 255);
            text-decoration: none; /* Removes the underline */
            text-decoration: underline;
        }

        a:hover {
            color: rgb(189, 229, 255); /* Changes the link color */
            text-decoration: underline;
        }

    </style>
</head>
<body>
    <!-- P-ai Leadership -->
    <h1>Meet the P-ai Leadership</h1>
    <div class="image-container">

        <div class="image-item">
            <a href="https://www.linkedin.com/in/sae-furukawa-0314b71a3/"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/df08961d-b330-4978-937b-ecc79c324683/29AE2008-7765-446B-BEFD-F770DED5A25C.jpeg?format=750w"/></a>
            <h2>Sae Furukawa</h2>
            <p>President</p>
            <p>Pomona '25</p>
            <p>Computer Science</p>
        </div>

        <div class="image-item">
            <a href="https://www.linkedin.com/in/jayhyunsuh/"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/4e48f4ad-5cc0-49bd-bee2-a36b1878d429/processed-399AA4C5-8CD2-451B-A91D-600BC7890A9A.jpeg?format=1000w"/></a>
            <h2>Jayhyun Suh</h2>
            <p>Vice President</p>
            <p>Pomona '26</p>
            <p>Math/Cognitive Science</p>
        </div>

        <div class="image-item">
            <a href="https://www.linkedin.com/in/asya-lyubavina-058155271/"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/26f3d352-f036-4950-9d95-50104ecc8244/Asya.jpeg?format=750w"/></a>
            <h2>Asya Lyubavina</h2>
            <p>Director of Marketing and Design</p>
            <p>Pomona '26</p>
            <p>Computer Science</p>
        </div>

    </div>

    <div class="image-container">
        <div class="image-item">
            <a href = "https://www.linkedin.com/in/aimeekco/"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/326a27df-b5ae-46f2-b3d2-9846ac91bf89/Aimee_headshot.jpeg?format=750w"/></a>
            <h2>Aimee Co</h2>
            <p>Director Of Projects</p>
            <p>Harvey Mudd '26</p>
            <p>Computer Science/Math</p>
        </div>

        <div class="image-item">
            <a href = "https://www.linkedin.com/in/abraryaser/"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/1d018450-bff2-4f0e-b739-e92efd97af93/processed-43A87784-BD25-41AA-8EB7-0B7D63588100.jpeg?format=750w"/></a>
            <h2>Abrar Yaser</h2>
            <p>Director of Projects</p>
            <p>Pomona '25</p>
            <p>Computer Science</p>
        </div>

        <div class="image-item">
            <a href="https://www.linkedin.com/in/dylan-o-connor/"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/bf2f2851-eedb-4e69-9ce5-42f6d3a19ece/IMG_8010.jpeg?format=1500w"/></a>
            <h2>Dylan O'Conner</h2>
            <p>Director of Projects</p>
            <p>Pomona '26</p>
            <p>Computer Science</p>
        </div>
    </div>
    
    <!-- Advisory Board -->
    <div class="highlight">
        <h1>Advisory Board</h1>
        <p><a href = "http://www.cs.pomona.edu/~dkauchak/" target="_blank"> David Kauchak</a> (Pomona College)</p>
        <p><a href = "https://www.cs.hmc.edu/~montanez/" target="_blank"> George Montañez</a> (Harvey Mudd College)</p>
        <p><a href = "https://www.scrippscollege.edu/offices/profile/michael-spezio" target="_blank"> Michael Spezio </a>(Scripps College)</p>
        <p><a href = "https://www.crunchbase.com/person/avery-bedows" target="_blank"> Avery Bedows</a> (Neurotechnology Specialist Loup Ventures)</p>
        <p><a href = "https://www.crunchbase.com/person/ron-sege" target = "_blank"> Ron Sege</a> (Partner Benhamou Global Ventures)</p>
        <p><a href = "https://www.linkedin.com/in/aashita-kesarwani/" target = "_blank">Aashita Kesarwani</a> (HMC Scientific Computing Specialist/ML Researcher)</p>
        <p><a href = "https://bright1993ff66.github.io/Resume/" target="_blank">HaoLiang Chang </a>(CityU HK PhD Student/NLP Researcher)</p>
        <p><a href = "https://bsky.app/profile/agstrait.bsky.social" target="_blank">Andrew Strait </a>(DeepMind Researcher)</p>
    </div>

    <!-- Partners -->
    <div>
        <h1>Partners</h1>
        <p>Please send an email to p.ai.claremont@gmail.com if you are interested in partnering or sponsoring P-ai!</p>
        <div class="image-container3">
            <div class="image-item2">
                <a href="https://www.korbit.ai/" target="_blank"><img src="Screenshot 2025-03-02 161153.png"/></a>
            </div>

            <div class="image-item2">
                <a href="https://www.navfeas.com/" target="_blank"><img src="navfeas.png"/></a>
            </div>

            <div class="image-item2">
                <a href="https://www.samba.tv/" target="_blank"><img src="Screenshot 2025-03-02 212321.png"/></a>
            </div>

            <div class="image-item2">
                <a href="https://www.tradeweb.com/" target="_blank"><img src="Tradeweb.jpeg"/></a>
            </div>
        </div>
    </div>
    
    <!-- Alumni -->
    <div>
        <h1>P-ai Alumni</h1>
        <div class="image-container2">
            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/hannahmandell/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/3a9b4e89-861a-4152-b6d4-b66e18dbb9ef/309385309_487313920080617_3733610816308122036_n.jpg?format=1000w"/></a>
                <h3>Hannah Mandell</h3>
                <p>Managing Director</p>
                <p>Pomona '23</p>
                <p class="hover-text">This is additional information that appears on hover.</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/bansipatel-/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/b481b9c8-5d26-410a-a19c-975b4466695a/bansi.jpeg?format=1000w"/></a>
                <h3>Bansi Patel</h3>
                <p>Director of Marketing</p>
                <p>Scripps '23</p>
                <p class="hover-text">Bansi is an alumni at Scripps College, who studied Media Studies and Psychology. She is interested in the role AI can play in social media monitoring and marketing. Outside of P-ai, Bansi has experience in marketing in the semiconductor industry. In her free time, Bansi enjoys photography, videography, and graphic design.</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/waverly-w-32ab80b9/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/66bca4de-5af3-4e65-b5e0-46e7ca480ff7/DSCF6704.jpg?format=1000w"/></a>
                <h3>Waverly Wang</h3>
                <p>Director of Design</p>
                <p>Harvey Mudd '25</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/andy-liu-8a2735126/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/59f0e4d2-8255-4cef-b158-9315e5352351/andy.jpg?format=1000w"/></a>
                <h3>Andy Liu</h3>
                <p>Director of Projects</p>
                <p>Harvey Mudd</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/alex-ker/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/1612060178561-3DIHW96ANZFUTT9R7T9T/alex.jpg?format=1000w"/></a>
                <h3>Alex Ker</h3>
                <p>Founder</p>
                <p>Pomona</p>
            </div>
        </div>

        <div class="image-container2">
            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/tai-xiang-120120192/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/581de72c-a80a-4865-a7fa-5c6a57ddc36b/taiii.jpg?format=1000w"/></a>
                <h3>Tai Xiang</h3>
                <p>Project Manager</p>
                <p>p-yum: Quantifying the Culinary side of YouTube </p>
                <p>Pomona</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/jczimm/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/1612060234433-35A8R4M96FEL6L44ZJKO/jacob.jpg?format=1000w"/></a>
                <h3>Jacob Zimmerman</h3>
                <p>Project Manager</p>
                <p>P-sync</p>
                <p>Pomona</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/nikolas-papastavrou-17b935155/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/1582402517199-9MX507TFCVLVPU9IJIQF/nik.jpg?format=1500w"/></a>
                <h3>Nikolas Papastavrou</h3>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/marcos-acosta-949b3217a/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/b64e7141-568c-4ba4-8bca-8d9c83e1e920/DSCF6737.jpg?format=1500w"/></a>
                <h3>Marcos Acosta</h3>
                <p>Director of Projects</p>
                <p>P-ASL Project Manager</p>
                <p>Harvey Mudd</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/michael-lee0/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/af2a6b48-7e6c-4ecf-ae8f-91b5832560ee/118959628_649427552660839_7201994308099998664_n.jpg?format=1000w"/></a>
                <h3>Michael Lee</h3>
                <p>Project Manager</p>
                <p>P-agent</p>
                <p>Claremont McKenna</p>
            </div>
        </div>

        <div class="image-container2">
            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/sophia-epstein-5a4085166/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/bb84eff1-bd4b-4efb-91ea-0c95ff9a9279/DSCF6721.jpg?format=1000w"/></a>
                <h3>Sophia Epstein</h3>
                <p>Project Manager</p>
                <p>p-PET</p>
                <p>Claremont McKenna</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/varun-bopardikar-983302183/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/1f814a2a-5ae0-4aec-b929-c8619bae99e2/DSCF6703.jpg?format=1500w"/></a>
                <h3>Varun Bopardikar</h3>
                <p>Managing Director</p>
                <p>Pitzer</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/marwan-bit-4790b3179/" target="_blank"><img src="https://media.licdn.com/dms/image/v2/D5603AQGScRtfIkvyMQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684543110903?e=2147483647&v=beta&t=48JIP6Yti-obXcFX9CHk1BBJyEhvE-6x3VXHl8scbSI"/></a>
                <h3>Marwan Bit</h3>
                <p>Project Manager</p>
                <p>p-music: AI-Generated Album Ratings</p>
                <p>Harvey Mudd '25</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/zachary-davis123/" target="_blank"><img src="https://media.licdn.com/dms/image/v2/C5603AQHQ4bZG1Zo_jg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1601444824511?e=2147483647&v=beta&t=h_u4YRV2MlK_TxVfLhtATgxnu0xGOS-rCmPs1Ls928Y"/></a>
                <h3>Zac Davis</h3>
                <p>Project Manager</p>
                <p><a href="https://docs.google.com/document/d/1JNg2dKvUoyJu4OiK47wWQ3E6oSsQfsYjPfgkCP_Kg-I/edit?tab=t.0#heading=h.h5ghr4yvf1pp" target="_blank">p-okémon: Pokémon Battle Engine</a></p>
                <p>Claremont McKenna '24</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/rachel-yang-/" target="_blank"><img src="DSCF6717.jpg"/></a>
                <h3>Rachel Yang</h3>
                <p>Director of Events</p>
            </div>
        </div>

        <div class="image-container2">
            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/saatvik-kher/" target="_blank"><img src="saatvik.jpeg"/></a>
                <h3>Saatvik Kher</h3>
                <p>Project Manager</p>
                <p><a href = "https://docs.google.com/document/d/1WH6Yi6u8a3c_GAeRdc3mlEMIYcwPYOTKg044vfyWZx4/edit?tab=t.0#heading=h.mkb6nexdlkr2"  target="_blank">p-recommender: Interactive Course Recommender for 5C Students</a></p>
                <p>Pomona '24</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/taylor-venenciano-a76655192/" target="_blank"><img src="taylor.jpeg"/></a>
                <h3>Taylor Venenciano</h3>
                <p>Project Manager</p>
                <p><a href = "https://docs.google.com/document/d/1i9PuWptIY8uMR9-i3c-oE2-FF2tt3Qoj7gcC72EQT9k/edit?tab=t.0#heading=h.mkb6nexdlkr2" target="_blank"> p-laying_soccer: UEFA Soccer Match Prediction</a></p>
                <p>Pomona '23</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/arjun-govind-94951322a/" target="_blank"><img src="arjun.jpeg"/></a>
                <h3>Arjun Govind</h3>
                <p>Project Manager</p>
                <p><a href = "https://docs.google.com/document/d/1s3mQwcG99Ojq7AFSOUyYcsvEcDSZVoNPQk9FaULEgiY/edit?tab=t.0#heading=h.hg4u2olerq8t" target="_blank">p-stocks: Predicting Stock Behavior from Google Searches</a></p>
                <p>Pomona '25</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/guythampakkul/" target="_blank"><img src="Guy.jpeg"/></a>
                <h3>Guy Thampakkul</h3>
                <p>Project Manager</p>
                <p><a href = "https://docs.google.com/document/d/1i9PuWptIY8uMR9-i3c-oE2-FF2tt3Qoj7gcC72EQT9k/edit?tab=t.0#heading=h.mkb6nexdlkr2" target="_blank"> p-laying_soccer: UEFA Soccer Match Prediction</a></p>
                <p>Pomona '23</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/hannah-zucker-0bb88b184/" target="_blank"><img src="hannah.jpg"/></a>
                <h3>Hannah Zucker</h3>
            </div>
        </div>

        <div class="image-container2">
            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/winnie-xu-a9224313b/" target="_blank"><img src="winnie.webp"/></a>
                <h3>Winnie Xu</h3>
                <p>Pomona</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/songelizabeth/" target="_blank"><img src="elizabeth.jpg"/></a>
                <h3>Elizabeth Song</h3>
                <p>Director of Operations & Finance </p>
                <p>Claremont McKenna</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/aaron-xie-0000/" target="_blank"><img src="Aaron.jpg"/></a>
                <h3>Aaron Xie</h3>
                <p>Project Manager</p>
                <p>p-TCM</p>
                <p>Claremont McKenna '24</p>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/danica-du/" target="_blank"><img src="danica.jpg"/></a>
                <h3>Danica Du </h3>
                <p>Project Manager</p>
                <p>p-deepfake</p>
                <p>Harvey Mudd '23</p>
            </div>
        </div>
    </div>
   
</body>
</html>
