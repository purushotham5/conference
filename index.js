let images = [];
let time = 3000;
let i = 0;
images[0] = "https://media.istockphoto.com/photos/pretty-young-business-woman-giving-a-presentation-picture-id532256991?k=20&m=532256991&s=612x612&w=0&h=Aai5OBph4420c_l5RK7oK1ESJlkHVjhLOa1izvx_9PM=";
images[1] = "https://us.123rf.com/450wm/imagesource/imagesource1902/imagesource190204511/117922937-woman-at-a-conference.jpg?ver=6";
images[2] = "https://www.incimages.com/uploaded_files/image/1920x1080/getty_499517325_236156.jpg";
images[3] = "https://us.123rf.com/450wm/lightpoet/lightpoet1611/lightpoet161100104/67027576-pretty-young-business-woman-giving-a-presentation-in-a-conference-meeting-setting-shallow-dof-color-.jpg?ver=6";
images[4] = "https://media.istockphoto.com/photos/young-attractive-and-confident-successful-man-with-headset-speaking-picture-id1139608035?k=20&m=1139608035&s=612x612&w=0&h=lfe_mBjVFECjNUQYb8pMHqVNPxOpkSpj6t0krChNB4s=";
images[5] = "https://media.istockphoto.com/photos/portrait-of-inspirational-innovative-speaker-talking-about-happiness-picture-id1226991415?k=20&m=1226991415&s=612x612&w=0&h=42crmSi4TX8212Fj9bmY9Q9vAY4ZPugQwGnr5zyoDV0=";
images[6] = "https://pikwizard.com/photos/9f09618155ed66a521bd71bc490194b6-m.jpg";
images[7] = "https://media.istockphoto.com/photos/rear-view-of-a-motivational-coach-giving-a-speech-picture-id1054785410?k=20&m=1054785410&s=612x612&w=0&h=7XwtPJXktCE0SP4l3uis_8Fh5P-U07XFQUPW7-5lRLE=";
images[8] = "https://d3kqdc25i4tl0t.cloudfront.net/articles/content/_295686_161111publicspeakingskills_Suder_hero.jpg";

function changeImg() {
    document.slider.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}
window.onload = changeImg;
