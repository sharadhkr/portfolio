const logoImages = [
  "https://github.com/user-attachments/assets/73b127f3-2af8-4525-aaaf-b3226d6423b9",
  "https://github.com/user-attachments/assets/734994f4-765a-4f00-8e49-6b2bd166c53a",
  "https://github.com/user-attachments/assets/01a477d1-d0d9-4085-ba7d-8c38baebf3e9",
  "https://github.com/user-attachments/assets/37067842-4347-4e1c-a7ca-14b5efdeaad6",
  "https://github.com/user-attachments/assets/1291b7ff-adde-444f-b6e8-9f55cb3daa2d",
  "https://github.com/user-attachments/assets/95d8941b-dccf-40a1-9c2b-b980658f9945",
  "https://github.com/user-attachments/assets/8476cbed-4530-4a3c-b78d-e49d7a440733",
  "https://github.com/user-attachments/assets/5d96735a-f231-4e21-a6b9-71ab0f51474a",
  "https://github.com/user-attachments/assets/28edaf5e-9f27-4dcc-86fc-e84e7bdaf5b5",
  "https://github.com/user-attachments/assets/f5ac4799-0264-4f74-9d7c-fbb5ca63cb7e",
  "https://github.com/user-attachments/assets/99d183c0-06cc-4b69-9bfe-2e18ca16fc1d",
  "https://github.com/user-attachments/assets/fb3eac64-403c-49e5-ad5b-ef93ef282262",
  "https://github.com/user-attachments/assets/53526c35-8eb1-48d0-97c4-bb83d357584c",
  "https://github.com/user-attachments/assets/c277aa2a-e972-42d2-978f-8eb2e32b24e3",
  "https://github.com/user-attachments/assets/5dd4275f-6752-43e5-846f-e295a578b891",
  "https://github.com/user-attachments/assets/d1e9c08e-f6fb-450a-bb4f-a28ff35322a4",
  "https://github.com/user-attachments/assets/5abbde99-10ec-4bb0-a1f6-0cc44fa36cd3",
  "https://github.com/user-attachments/assets/4336570c-72f4-4f85-8d23-db812945160e",
  "https://github.com/user-attachments/assets/02d30cc9-7e72-4078-afd6-ec049061242e",
  "https://github.com/user-attachments/assets/cb4cca90-659d-4844-872a-4e9a2dcc7e65",
  "https://github.com/user-attachments/assets/2cd40e64-ef6b-4361-bf4b-aa0722e4ea46",
  "https://github.com/user-attachments/assets/f9b7d741-f785-4116-8438-f4c0a9a86d92",
  "https://github.com/user-attachments/assets/a111b5cf-2295-46f6-bfb8-cda7ab30a886",
  "https://github.com/user-attachments/assets/3640aa9f-3e5b-4a2f-96ce-4855b211bdd8",
  "https://github.com/user-attachments/assets/46f5d1d0-6b5f-451f-9e76-afcc4cdb0c0b",
  "https://github.com/user-attachments/assets/234b70d9-0609-4350-93eb-a0b0c8b075ed",
  "https://github.com/user-attachments/assets/9cced85e-4ca6-4d9d-8356-5b095119ab0c",
  "https://github.com/user-attachments/assets/29657113-f9e6-4cdd-a692-0da660b8dee5",
  "https://github.com/user-attachments/assets/24bff455-2d0f-48cb-8463-4542b64ee9f1",
  "https://github.com/user-attachments/assets/70b6e8a1-c4d9-4614-98de-ca733e8970e9",
  "https://github.com/user-attachments/assets/eb49648f-ea80-4875-b701-6da2d6537c98",
  "https://github.com/user-attachments/assets/46f5d1d0-6b5f-451f-9e76-afcc4cdb0c0b",
  "https://github.com/user-attachments/assets/0abe8978-fe39-4db6-af7b-64c322f62d70",
  "https://github.com/user-attachments/assets/df8c88dc-6c4f-4c6d-88d9-8b79ef503e5d",
  "https://github.com/user-attachments/assets/f52d43b3-3d22-4912-9beb-e521587b9ae5",
  "https://github.com/user-attachments/assets/1201b78a-e07f-495f-af4a-29d9829fc5dd",
  "https://github.com/user-attachments/assets/d5406158-5ffe-48b5-8f60-b7e38a690d7c",
  "https://github.com/user-attachments/assets/0d7775eb-e842-4a67-9dc9-8436bfcb7dbb",
  "https://github.com/user-attachments/assets/3759de42-7e8e-4752-a91f-d7688bc4aa86",
  "https://github.com/user-attachments/assets/3190298e-047f-4f86-a468-a262bea5bd5c",
  "https://github.com/user-attachments/assets/2499ed0d-8c40-4aa0-b1e7-1f150e12837d",
  "https://github.com/user-attachments/assets/bb58cd0e-fde0-4f85-9b33-1a1290518f65",
  "https://github.com/user-attachments/assets/a2b777d1-396d-4e5b-a749-e97016669f2b",
  "https://github.com/user-attachments/assets/c7715068-1204-43d1-b298-2f840303410e",
  "https://github.com/user-attachments/assets/2e512fe3-b66f-4278-8fc3-42c3c2dfbb4e",
  "https://github.com/user-attachments/assets/ef86f71b-6550-4b51-b6af-c682416973a3",
  "https://github.com/user-attachments/assets/5a53e910-a0df-4a06-ad3c-8fb31987e3d8",
  "https://github.com/user-attachments/assets/46641706-580e-4e54-b39b-770b5657f209",
  "https://github.com/user-attachments/assets/f8da8a00-55c1-4857-acb2-6d6d79bb9e82",
  "https://github.com/user-attachments/assets/8d4b81a1-75f4-47ee-bfd5-84fc172a13bd",
  "https://github.com/user-attachments/assets/5df95a06-be49-4b96-aac4-c41edeec79ce",
  "https://github.com/user-attachments/assets/1c3efc34-d4e7-4663-9b0a-69d66ff80155",
  "https://github.com/user-attachments/assets/74ac6127-d98a-4542-8432-07ac42d49e77",
  "https://github.com/user-attachments/assets/3b18f9eb-292d-46ea-9991-f718979776f9",
  "https://github.com/user-attachments/assets/e6ed69d9-6ba4-42db-af44-1a5f0b240671",
  "https://github.com/user-attachments/assets/b6c2301c-5b5e-413d-a33a-8f256bccd489",
  "https://github.com/user-attachments/assets/1e3359f2-fda9-4891-9e33-4826d8838b3d",
  "https://github.com/user-attachments/assets/6d3b7faa-043b-4ebb-9693-2a9195d70e98",
  "https://github.com/user-attachments/assets/9a21b94c-807c-4344-a83e-c9f46879e5ce",
  "https://github.com/user-attachments/assets/3eb78ce7-cf3d-4d57-85e0-2871d47c1e64",
  "https://github.com/user-attachments/assets/b597e567-bd13-4f31-ab66-13c70407448f",
  "https://github.com/user-attachments/assets/fffe6cb3-605c-4a3c-8ecc-15998fe745c9",
  "https://github.com/user-attachments/assets/9f4171e6-b446-4645-bd6a-e56a2e14f1ce",
  "https://github.com/user-attachments/assets/ef27833d-8749-4d74-942f-27962b075b17",
  "https://github.com/user-attachments/assets/2be0e341-3e1b-4fa6-bb69-99b0695e02b9",
  "https://github.com/user-attachments/assets/214556f4-abf5-406d-b970-a6ea02862ecd",
  "https://github.com/user-attachments/assets/9f2788b9-147d-43c4-abdd-12fa0c13c7ad",
  "https://github.com/user-attachments/assets/839e640c-3aae-4cc8-a4ce-ed50e5b0c9d4",
  "https://github.com/user-attachments/assets/a6eb24bf-d9d7-425a-a43e-859b8318a65b",
  "https://github.com/user-attachments/assets/520465a5-eb68-4d91-baa8-038f7a3729b5",
  "https://github.com/user-attachments/assets/f6efb8be-ecb1-47f2-a81c-8f7fef87e682",
  "https://github.com/user-attachments/assets/e830c42b-62b0-4e7b-86fc-5eb8d736e967",
  "https://github.com/user-attachments/assets/a80970d4-d46c-406a-95fe-c8859f714fbb",
  "https://github.com/user-attachments/assets/45fca0ff-e905-456f-a1ca-92547a551fbf",
  "https://github.com/user-attachments/assets/78a199f9-e9c2-476b-812e-695cb16cbdea",
  "https://github.com/user-attachments/assets/ecfd47ed-7db8-4b00-8384-7758e13b52a8",
  "https://github.com/user-attachments/assets/b6ed6540-26cb-4da4-ade0-f7b13cd278e9",
  "https://github.com/user-attachments/assets/c14e0397-507e-4a1b-be54-ac449a5bcf88",
  "https://github.com/user-attachments/assets/0382bddb-82fe-488b-9073-2836d7868697",
  "https://github.com/user-attachments/assets/cc8812a3-ced2-4ddb-bc1a-1c1f446b301b",
  "https://github.com/user-attachments/assets/66e3ba71-7080-472b-a199-7d232766f46d",
  "https://github.com/user-attachments/assets/16605cd5-3b53-4189-89c8-2bcc64f80675",
  "https://github.com/user-attachments/assets/3771e544-9a57-4d1a-8cf1-67518f0bde2b",
  "https://github.com/user-attachments/assets/6d10d359-0811-4c05-8631-4eab859309f3",
  "https://github.com/user-attachments/assets/4918bed9-449f-48e9-9586-04f3e4a1cf11",
  "https://github.com/user-attachments/assets/64e949fd-95b1-4784-a509-03e6ce71ce16",
  "https://github.com/user-attachments/assets/a367c0fd-992d-458c-af62-847e3a3c278b",
  "https://github.com/user-attachments/assets/e2aa1a62-b401-48aa-8baa-880cfd7a00a8",
  "https://github.com/user-attachments/assets/94bdd9b7-a9df-44fc-9382-e926cfada792",
  "https://github.com/user-attachments/assets/e0f97464-ff4b-4079-a875-bad4b872f7e4",
  "https://github.com/user-attachments/assets/3341679b-7b9e-486a-aa54-615d0871400f",
  "https://github.com/user-attachments/assets/7e268181-32b0-4624-bbf1-cec5a3b9ab66",
  "https://github.com/user-attachments/assets/da91ff32-d01f-4274-8a1e-05278c9c8c97",
  "https://github.com/user-attachments/assets/cddb9630-42c1-4ffc-a1b4-cac20d33bd24",
  "https://github.com/user-attachments/assets/df8c88dc-6c4f-4c6d-88d9-8b79ef503e5d",
  "https://github.com/user-attachments/assets/216a2dce-4917-46d8-add2-b1e6ace05d81",
];

const bannerImages = [
  "https://github.com/user-attachments/assets/60dff9e5-41dc-4611-ad8c-ae4c5615f235",
  "https://github.com/user-attachments/assets/e2dbe16d-5762-449a-a50c-6d649bbc3fb9",
  "https://github.com/user-attachments/assets/86ef24c6-84af-4837-9805-a7196f444978",
  "https://github.com/user-attachments/assets/eae13413-2327-48b4-bdd5-8851ad55a75e",
  "https://github.com/user-attachments/assets/c7d2651b-dcc6-4fed-953a-39b87baf219e",
  "https://github.com/user-attachments/assets/876b7d70-3ed5-402c-8c41-d1d3fa56cb64",
  "https://github.com/user-attachments/assets/fe21f8eb-9ca6-43c0-87f9-8c0c10242ef7",
  "https://github.com/user-attachments/assets/14635904-2e6a-4e1f-84f9-318b031c6c43",
  "https://github.com/user-attachments/assets/689c542c-df3e-47fb-9fd3-38636b161269",
  "https://github.com/user-attachments/assets/b0fe4d03-14aa-4f56-bcec-1c1332171d85",
  "https://github.com/user-attachments/assets/379cd0cd-ca98-4dd2-9f25-16b059f19306",
  "https://github.com/user-attachments/assets/a78f5f28-210e-42d4-9d22-ef85c6013d61",
  "https://github.com/user-attachments/assets/8b11836e-e302-4d69-969e-40c0a8e45403",
  "https://github.com/user-attachments/assets/17a26388-3934-4cdf-9bc0-fe29015fbf7f",
  "https://github.com/user-attachments/assets/bfadbe0a-f05a-4312-9ae3-1ce4245fe3ca",
  "https://github.com/user-attachments/assets/da52da23-dec0-4d59-894a-595689b04bbd",
  "https://github.com/user-attachments/assets/bf93dd87-a9ab-45f0-9354-7300e0082322",
  "https://github.com/user-attachments/assets/4dc3e768-6f40-4062-9ac0-e63276a56bc9",
  "https://github.com/user-attachments/assets/dd81ed1b-5eaf-411a-a344-4e1f8f1c5aff",
  "https://github.com/user-attachments/assets/632f13a0-4f64-4763-87ae-17a911a59742",
  "https://github.com/user-attachments/assets/c3023592-d353-4b9e-910d-cf92881c58ac",
  "https://github.com/user-attachments/assets/88e0b4b7-85f1-45ba-921a-21924740d507",
  "https://github.com/user-attachments/assets/1d9afc2c-c017-4813-affa-a1fa6039a7d3",
  "https://github.com/user-attachments/assets/109ca0d0-1a3f-48d8-aeca-9da60045c132",
  "https://github.com/user-attachments/assets/16e7350e-a0f9-4c38-9d35-036de0c2f1c4",
  "https://github.com/user-attachments/assets/fe862917-78ea-4a0e-8d9f-d8dc2575fd2d",
  "https://github.com/user-attachments/assets/d825b9f2-b6eb-41c5-971c-ea69a3b77d96",
  "https://github.com/user-attachments/assets/ae11d446-032e-4a5f-9fdb-5397e74ba3fe",
  "https://github.com/user-attachments/assets/e908bf4e-79b9-450f-b881-38f55aeb5770",
  "https://github.com/user-attachments/assets/5df52504-39a7-4d93-9d5d-a2beb4ce4ff3",
  "https://github.com/user-attachments/assets/35672933-d453-4623-a555-e95b362ca6a4",
  "https://github.com/user-attachments/assets/ce45be32-cb89-417b-bee3-c33ef6142c7f",
  "https://github.com/user-attachments/assets/8da652e2-7249-4145-a191-d009f79ff678",
  "https://github.com/user-attachments/assets/0f4e40ab-b30f-494f-945e-0a0da6c79a57",
  "https://github.com/user-attachments/assets/05c2fcbc-e3dc-40bd-8463-8d499cbe521f",
];

const postImages = [
  
  "https://github.com/user-attachments/assets/50ab2601-97bc-48a1-abd8-ef6500b0a473",
  "https://github.com/user-attachments/assets/3a4c4316-9e04-45b6-993e-ead44230780e",
  "https://github.com/user-attachments/assets/e5abad7a-5ef2-4a01-a987-6d836be61ad0",
  "https://github.com/user-attachments/assets/1eb3b30f-39b5-4470-b33c-b3a5362cb556",
  "https://github.com/user-attachments/assets/cc329852-c465-4650-bc18-19fe222538c4",
  "https://github.com/user-attachments/assets/6bf7b8a2-718e-4840-83a4-87d26660bc85",
  "https://github.com/user-attachments/assets/162ffb30-3f3d-4ece-96ad-e1509e2450e9",
  "https://github.com/user-attachments/assets/4a750505-e86e-4200-af6c-ab75b6da396b",
  "https://github.com/user-attachments/assets/831aa848-ed69-4fc9-bd26-7f3a4632fc86",
  "https://github.com/user-attachments/assets/33db5b7c-48a4-4186-ac1e-9b9ba89a1489",
  "https://github.com/user-attachments/assets/7c8a0823-3125-4fe3-bda4-098f2c6e8bde",
  "https://github.com/user-attachments/assets/a538b8ba-999f-4934-b8d5-ef6c65366dca",
  "https://github.com/user-attachments/assets/06497f76-0504-4ac3-9361-bb3e87e442ca",
  "https://github.com/user-attachments/assets/a9265bc4-b3e3-4cc1-8966-f7c24f1bed11",
  "https://github.com/user-attachments/assets/2747afee-b62c-4da3-8e56-6accb2db3346",
  "https://github.com/user-attachments/assets/7ce40e9a-ed3e-4185-9e68-7f84b6c0dfb8",
  "https://github.com/user-attachments/assets/0d6178c1-a210-45c7-bbf6-29100ff5d8d3",
  "https://github.com/user-attachments/assets/df258760-74b3-4cb6-a5c5-5c7a2752218e",
  "https://github.com/user-attachments/assets/7712a16b-a275-4300-a250-5fbe21cc3ec0",
  "https://github.com/user-attachments/assets/5254b529-bf04-4a03-9fd5-dca8792b5f37",
  "https://github.com/user-attachments/assets/6351092b-84a4-4261-aec1-7cb8042ce44c",
  "https://github.com/user-attachments/assets/8e827761-6518-4fae-a0e0-31c14e684a9d",
  "https://github.com/user-attachments/assets/60529b94-e582-4b41-99a0-e7932fc267b5",
  "https://github.com/user-attachments/assets/87c13b53-cab3-409f-9e24-fc26b3cbb653",
  "https://github.com/user-attachments/assets/2667ac38-12fa-4acc-a85d-39c2e3076775",
  "https://github.com/user-attachments/assets/4952bda2-3342-403c-95dd-b22bc0b83ed9",
  "https://github.com/user-attachments/assets/10856a42-613a-42fc-a561-b2f8607cda0b",
  "https://github.com/user-attachments/assets/21639161-0503-4b7b-b1c7-e66a9ff34680",
  "https://github.com/user-attachments/assets/8fb65147-b29f-475f-855c-637effcf4b55",
  "https://github.com/user-attachments/assets/665059e5-7da9-4a84-8097-9cb2d2d07f35",
  "https://github.com/user-attachments/assets/59e5fd12-1983-408c-a342-641f624ba7a6",
  "https://github.com/user-attachments/assets/a6d1f0b3-1d59-46a4-8deb-65ebb1d3258a",
  "https://github.com/user-attachments/assets/b0975556-a316-4572-985d-559d43dbeb82",
  "https://github.com/user-attachments/assets/5fc7b7f3-59da-4c3d-b934-9c295adee403",
  "https://github.com/user-attachments/assets/0c649785-cf4b-4478-9bf8-03ac850ef364",
  "https://github.com/user-attachments/assets/991e3a6b-f43b-45a4-9e8f-f292594d6226",
  "https://github.com/user-attachments/assets/db67b832-dce2-484a-85ba-d85871f27eb8",
  "https://github.com/user-attachments/assets/f6a88314-efc7-4287-8168-ba099a616f75",
  "https://github.com/user-attachments/assets/1fd4dc9a-5362-4abf-bfde-bf6deef548c3",
  "https://github.com/user-attachments/assets/1b0e96da-cc40-4e40-bbe5-1706a3430750",
  "https://github.com/user-attachments/assets/79844a15-6779-4d2a-b4b1-d9fd990bca95",
  "https://github.com/user-attachments/assets/b566a4e2-7589-4e80-9930-28c0dbe4a366",
  "https://github.com/user-attachments/assets/4c8642b0-aa34-4bdb-ac3b-1c20757c7106",
  "https://github.com/user-attachments/assets/2e033498-36d5-413e-9003-4d68658d9812",
  "https://github.com/user-attachments/assets/5464cc45-3d5b-45c1-9d26-d082c3c56fce",
  "https://github.com/user-attachments/assets/fbaead43-543c-4daf-956b-614bb1e1ab2e",
  "https://github.com/user-attachments/assets/547cda4c-35d1-4bdf-bc1b-d13e8f53b027",
  "https://github.com/user-attachments/assets/6b8a1291-63e2-4537-9736-eab8d952d568",
  "https://github.com/user-attachments/assets/6821ce1d-10b1-4910-aaf6-ef306a38be7a",
];

const logoButton = document.getElementById("logo-button");
const bannerButton = document.getElementById("banner-button");
const postButton = document.getElementById("post-button");

const logosSection = document.querySelector(".logos");
const bannersSection = document.querySelector(".banners");
const postsSection = document.querySelector(".posts");

const logoModal = document.getElementById("logo-modal");
const bannerModal = document.getElementById("banner-modal");
const postModal = document.getElementById("post-modal");

const logoModalImage = document.getElementById("logo-modal-image");
// const bannerModalImage = document

const bannerModalImage = document.getElementById("banner-modal-image");
const postModalImage = document.getElementById("post-modal-image");

// Generate logo images
logoImages.forEach((imageURL) => {
  const img = document.createElement('img');
  img.src = imageURL;
  img.alt = '';
  img.width = 90;
  img.height = 'auto';
  img.addEventListener('click', () => {
    logoModalImage.src = imageURL;
    logoModal.style.display = 'flex';
  });
  logosSection.querySelector('.image-grid').appendChild(img);
});

// Generate banner images
bannerImages.forEach((imageURL) => {
  const img = document.createElement('img');
  img.src = imageURL;
  img.alt = '';
  img.width = 90;
  img.height = 'auto';
  img.addEventListener('click', () => {
    bannerModalImage.src = imageURL;
    bannerModal.style.display = 'flex';
  });
  bannersSection.querySelector('.image-grid').appendChild(img);
});

// Generate post images
postImages.forEach((imageURL) => {
  const img = document.createElement('img');
  img.src = imageURL;
  img.alt = '';
  img.width = 100;
  img.height = 'auto';
  img.addEventListener('click', () => {
    postModalImage.src = imageURL;
    postModal.style.display = 'flex';
  });
  postsSection.querySelector('.image-grid').appendChild(img);
});


// Add event listeners to modal close buttons
document.getElementById('close-logo-modal').addEventListener('click', () => {
  logoModal.style.display = 'none';
});

document.getElementById('close-banner-modal').addEventListener('click', () => {
  bannerModal.style.display = 'none';
});

document.getElementById('close-post-modal').addEventListener('click', () => {
  postModal.style.display = 'none';
});

const sections = document.querySelectorAll('.section');

sections.forEach((section) => {
  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const circle = section.querySelector('::before');
    circle.style.transform = `translate(${x}px, ${y}px) scale(1)`;
  });

  section.addEventListener('mouseleave', () => {
    const circle = section.querySelector('::before');
    circle.style.transform = `translate(0, 0) scale(0.4)`;
  });
});


logosSection.style.display = "none";
bannersSection.style.display = "none";
postsSection.style.display = "none";

logoButton.addEventListener('click', () => {
  if (logoButton.classList.contains('active')) {
    logosSection.style.display = "none";
    logoButton.classList.remove('active');
  } else {
    logosSection.style.display = "block";
    bannersSection.style.display = "none";
    postsSection.style.display = "none";
    logoButton.classList.add('active');
    bannerButton.classList.remove('active');
    postButton.classList.remove('active');
  }
});

bannerButton.addEventListener('click', () => {
  if (bannerButton.classList.contains('active')) {
    bannersSection.style.display = "none";
    bannerButton.classList.remove('active');
  } else {
    logosSection.style.display = "none";
    bannersSection.style.display = "block";
    postsSection.style.display = "none";
    bannerButton.classList.add('active');
    logoButton.classList.remove('active');
    postButton.classList.remove('active');
  }
});

postButton.addEventListener('click', () => {
  if (postButton.classList.contains('active')) {
    postsSection.style.display = "none";
    postButton.classList.remove('active');
  } else {
    logosSection.style.display = "none";
    bannersSection.style.display = "none";
    postsSection.style.display = "block";
    postButton.classList.add('active');
    logoButton.classList.remove('active');
    bannerButton.classList.remove('active');
  }
});
