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

        .image-container2 {
            display: flex; /* Aligns the images in a row */
            justify-content: center; /* Centers the images horizontally */
            gap: 30px; /* Adds space between the images */
            margin-bottom: 50px;
        }

        body{
           
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
            height: 500px; /* Maintain aspect ratio */
            object-fit: cover
        }

        .image-item2 img {
            width: 300px; /* Adjust the width of the images */
            height: 300px; /* Maintain aspect ratio */
            object-fit: cover
        }

        .image-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
        }

        .image-wrapper img {
            width: 200px; /* Adjust the width of the images */
            height: 300px;
            object-fit: cover; /* Ensures images maintain aspect ratio while filling the space */
        }

        .image-wrapper img:hover {
            width: 400px; /* Adjust the width of the images */
            height: 600px;
            object-fit: cover; /* Ensures images maintain aspect ratio while filling the space */
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
            background-color:rgb(44, 57, 235);
            color: white;
            padding-left: -10px;
            padding-right: -10px;
            padding-top: 30px;
            padding-bottom: 30px;
        }

        a {
            color: rgb(255, 0, 128); /* Changes the link color */
            text-decoration: none; /* Removes the underline */
            text-decoration: underline;
        }

        a:hover {
            color: rgb(221, 0, 255); /* Changes color when hovered over */
            text-decoration: underline;
        }

    </style>
</head>
<body>
    <!-- P-ai Leadership -->
    <h1>Meet the P-ai Leadership</h1>
        <div class="image-container">
        <div class="image-item">
            <img src="download (6).jpeg"/>
            <h2>Asya Lyubavina</h2>
            <p>Director of Marketing and Design</p>
            <p>Pomona '26</p>
            <p>Computer Science</p>
        </div>

        <div class="image-item">
            <img src="download (1).jpeg"/>
            <h2>Sae Furukawa</h2>
            <p>President</p>
            <p>Pomona '25</p>
            <p>Computer Science</p>
        </div>

        <div class="image-item">
            <img src="download (2).jpeg"/>
            <h2>Jayhyun Suh</h2>
            <p>Vice President</p>
            <p>Pomona '26</p>
            <p>Math/Cognitive Science</p>
        </div>

    </div>

    <div class="image-container">
        <div class="image-item">
            <img src="download (3).jpeg"/>
            <h2>Aimee Co</h2>
            <p>Director Of Projects</p>
            <p>Harvey Mudd '26</p>
            <p>Computer Science/Math</p>
        </div>

        <div class="image-item">
            <img src="download (5).jpeg"/>
            <h2>Abrar Yaser</h2>
            <p>Director of Projects</p>
            <p>Pomona '25</p>
            <p>Computer Science</p>
        </div>

        <div class="image-item">
            <img src="download.jpeg"/>
            <h2>Dylan O'Conner</h2>
            <p>Director of Projects</p>
            <p>Pomona '26</p>
            <p>Computer Science</p>
        </div>
    </div>
    
    <!-- Advisory Board -->
    <div class="highlight">
        <h1>Advisory Board</h1>
        <p>David Kauchak (Pomona College)</p>
        <p>George Montañez (Harvey Mudd College)</p>
        <p>Michael Spezio (Scripps College)</p>
        <p>Avery Bedows (Neurotechnology Specialist Loup Ventures)</p>
        <p>Ron Sege (Partner Benhamou Global Ventures)</p>
        <p>Aashita Kesarwani (HMC Scientific Computing Specialist/ML Researcher)</p>
        <p>HaoLiang Chang (CityU HK PhD Student/NLP Researcher)</p>
        <p>Andrew Strait (DeepMind Researcher)    </p>
    </div>

    <!-- Partners -->
    <div>
        <h1>Partners</h1>
        <p>Please send an email to p.ai.claremont@gmail.com if you are interested in partnering or sponsoring P-ai!</p>
        <div class="image-container2">
            <div class="image-item2">
                <img src="download (4).jpeg"/>
            </div>

            <div class="image-item2">
                <img src="download.png"/>
            </div>

            <div class="image-item2">
                <img src="download (4).jpeg"/>
            </div>

            <div class="image-item2">
                <img src="download.png"/>
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
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/bansipatel-/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/b481b9c8-5d26-410a-a19c-975b4466695a/bansi.jpeg?format=1000w"/></a>
                <h3>Bansi Patel</h3>
                <p>Director of Marketing</p>
                <p>Scripps '23</p>
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
                <a href = "https://www.linkedin.com/in/nikolas-papastavrou-17b935155/" target="_blank"><img src="https://www.linkedin.com/in/nikolas-papastavrou-17b935155/"/></a>
                <h3>Nikolas Papastavrou</h3>
            </div>

            <div class="image-wrapper">
                <a href = "https://www.linkedin.com/in/marcos-acosta-949b3217a/" target="_blank"><img src="https://www.linkedin.com/in/marcos-acosta-949b3217a/"/></a>
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
                <a href = "https://www.linkedin.com/in/sophia-epstein-5a4085166/" target="_blank"><img src="https://images.squarespace-cdn.com/content/v1/5d5aca05ce74150001a5af3e/1f814a2a-5ae0-4aec-b929-c8619bae99e2/DSCF6703.jpg?format=1000w"/></a>
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
                <img src="Pink/peakpx (1).jpg"/>
                <h3>Rachel Yang</h3>
                <p>Director of Events</p>
            </div>
        </div>

        <div class="image-container2">
            <div class="image-wrapper">
                <img src="Pink/shugo (2).jpg"/>
                <h3>Saatvik Kher</h3>
                <p>Project Manager</p>
                <p><a href = "https://docs.google.com/document/d/1WH6Yi6u8a3c_GAeRdc3mlEMIYcwPYOTKg044vfyWZx4/edit?tab=t.0#heading=h.mkb6nexdlkr2"  target="_blank">p-recommender: Interactive Course Recommender for 5C Students</a></p>
                <p>Pomona '24</p>
            </div>

            <div class="image-wrapper">
                <img src="Pink/shugo (2).jpg"/>
                <h3>Taylor Venenciano</h3>
                <p>Project Manager</p>
                <p><a href = "https://docs.google.com/document/d/1i9PuWptIY8uMR9-i3c-oE2-FF2tt3Qoj7gcC72EQT9k/edit?tab=t.0#heading=h.mkb6nexdlkr2" target="_blank"> p-laying_soccer: UEFA Soccer Match Prediction</a></p>
                <p>Pomona '23</p>
            </div>

            <div class="image-wrapper">
                <img src="Pink/shugo (2).jpg"/>
                <h3>Arjun Govind</h3>
                <p>Project Manager</p>
                <p><a href = "https://docs.google.com/document/d/1s3mQwcG99Ojq7AFSOUyYcsvEcDSZVoNPQk9FaULEgiY/edit?tab=t.0#heading=h.hg4u2olerq8t" target="_blank">p-stocks: Predicting Stock Behavior from Google Searches</a></p>
                <p>Pomona '25</p>
            </div>

            <div class="image-wrapper">
                <img src="Pink/shugo (2).jpg"/>
                <h3>Guy Thampakkul</h3>
                <p>Project Manager</p>
                <p><a href = "https://docs.google.com/document/d/1i9PuWptIY8uMR9-i3c-oE2-FF2tt3Qoj7gcC72EQT9k/edit?tab=t.0#heading=h.mkb6nexdlkr2" target="_blank"> p-laying_soccer: UEFA Soccer Match Prediction</a></p>
                <p>Pomona '23</p>
            </div>

            <div class="image-wrapper">
                <img src="Pink/shugo (2).jpg"/>
                <h3>Hannah Zucker</h3>
            </div>
        </div>

        <div class="image-container2">
            <div class="image-wrapper">
                <img src="Pink/tumblr_nz42ck2W7p1ugs750o1_1280.jpg"/>
                <h3>Winnie</h3>
                <p>Pomona</p>
            </div>

            <div class="image-wrapper">
                <img src="Pink/tumblr_nz42ck2W7p1ugs750o1_1280.jpg"/>
                <h3>Elizabeth Song</h3>
                <p>Director of Operations & Finance </p>
                <p>Claremont McKenna</p>
            </div>

            <div class="image-wrapper">
                <img src="Pink/tumblr_nz42ck2W7p1ugs750o1_1280.jpg"/>
                <h3>Aaron Xie</h3>
                <p>Project Manager</p>
                <p>p-TCM</p>
                <p>Claremont McKenna '24</p>
            </div>

            <div class="image-wrapper">
                <img src="Pink/tumblr_nz42ck2W7p1ugs750o1_1280.jpg"/>
                <h3>Danica Du </h3>
                <p>Project Manager</p>
                <p>p-deepfake</p>
                <p>Harvey Mudd '23</p>
            </div>
        </div>
    </div>
   
</body>
</html>