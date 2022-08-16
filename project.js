let projects= [] 
function addProject(){
	let projectname = document.getElementById('input-project-name').value;
	let startdate = document.getElementById('input-start-date').value;
	let enddate = document.getElementById('input-end-date').value;
	let description = document.getElementById('input-description').value;
	let image = document.getElementById('upload-project-img').files[0];
	image = URL.createObjectURL(image);
    let nodejs = document.getElementById('techno-nodejs').checked;
    let nextjs = document.getElementById('techno-nextjs').checked;
    let reactjs = document.getElementById('techno-reactjs').checked;
    let typescript = document.getElementById('techno-typescript').checked;
    
    if (nodejs){
        nodejs =  "node" 
    }
    if (nextjs){
        nextjs = "facebook"
    }
	if(reactjs){
		reactjs = "react"
	}
	if(typescript){
		typescript="js"
	}
		
	let bulan = 0;
	const date1 = new Date(startdate);
	const date2 = new Date(enddate);
	const time = Math.abs(date2 - date1);
	let days = Math.ceil(time / (1000 * 60 * 60 *24) );
	if(days<30){
		days=days;
	}else 
		{	do{
				bulan++;
				days-=30;	
			}while(days>=30);
		}

	let project={
		projectname: projectname,
		startdate: startdate,
		enddate: enddate,
		description:description,
        image:image,
        nodejs:nodejs,
        nextjs:nextjs,
		reactjs:reactjs,
		typescript:typescript,
		bulan:bulan,
		days:days
	}
	projects.push(project)
    renderProject()
}

	
function renderProject(){
	let projectWrapper = document.getElementById('contents');
	projectWrapper.innerHTML = ''
	for(let i=0; i<projects.length; i++){
		projectWrapper.innerHTML += ` 
		<div class= "project-list-item">
			<div class="project-image">
				<img src="${projects[i].image}" alt=""/>
			</div>
			<div class="project-content">
				<div class="name-project">
					<h1><a href="detailProject.html">${projects[i].projectname} </a></h1>
                    </div>
				<div class="duration">
					<h3>durasi : ${projects[i].bulan} Bulan  ${projects[i].days} hari</h3>
				</div>
				<div class="description">
					<div class="desc2"><p>${projects[i].description}</p></div>
				</div>
				<div class="techno" id="technos">
                <i class="fa-brands fa-${projects[i].nodejs}"></i> <i class="fa-brands fa-${projects[i].nextjs}"></i>
				</i> <i class="fa-brands fa-${projects[i].reactjs}"></i><i class="fa-brands fa-${projects[i].typescript}"></i>
				</div>
				<div class="group-button">
					<button class="btn-edit"> Edit </button>
					<button class="btn-delete">Delete</button>
				</div>
			</div>
		</div>`
	}
}
