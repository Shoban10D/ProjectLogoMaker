import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
@Component({
  selector: 'app-logo-home',
  templateUrl: './logo-home.component.html',
  styleUrls: ['./logo-home.component.css']
})
export class LogoHomeComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private chatService:ChatService) {}
  logoInfoForm!:FormGroup;
  isLinear = false;
  spinner = false;
  description = '';
  projectName='';
  conceptSelect='';
  logoColor='';
  customerChoiceAccess = false;
  logoDescriptions:string[] = []
  sampleData:string[] = [];

 

  ngOnInit(): void {
    this.logoInfoForm = this._formBuilder.group({
      projectDescription:['',[Validators.required]],
      projectName:['',[Validators.required]],
      conceptSelection:['',[Validators.required]],
      logoColors:['',[Validators.required]]
    })   
  }

  isLinearCheck(){
    if(this.logoInfoForm.controls['projectDescription'].errors){
      console.log("Not filled out");
      this.isLinear = true;
      return true;
    }else{
      console.log("Filled out");      
      this.isLinear  = false;
      return false;
    }
  }

  async submit(){
    this.spinner = true;
    this.customerChoiceAccess = true;
    console.log(this.logoInfoForm.value);
    const chat = "Generate 12 logo concepts based on the inputs:{ Project Name : "+this.projectName+" ; Description : "+this.description+ " ; Logo Requirements : "+this.conceptSelect+" ; Preferred colors: "+this.logoColor+" }";
    console.log(chat,'<<-----')
    const requestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": chat}]
    }
    // this.sampleData = ["1. A fierce lion's head with bold red and yellow coloring and sharp claws",
    // "2. An abstract lion's claw in gold with the word LEO in bold black letters",
    // "3. A simplified lion silhouette in black with a bold, red claw mark across it",
    // "4. A roaring lion face in black with a golden mane, claws prominently displayed",
    // "5. A golden lion silhouette with black claws on a red background",
    // "6. A black and yellow crest with a lion's head, claws gripping a banner reading \"LEO\"",
    // "7. A clawed, stylized \"L\" in yellow and red to symbolize lion and Leo",
    // "8. A combination of a roaring lion and a claw in gold, on a black background",
    // "9. A lion's paw print with the word LEO in bold black letters underneath",
    // "10. A lion's head emerging from a red and yellow shield with black claws",
    // "11. A gold lion head with a red tongue and claws, surrounded by black and yellow stripes",
    // "12. An abstract depiction of lion claws in gold and red, with the word LEO written in bold black letters."]

    
    await new Promise(()=>{
      this.chatService.postChat(requestBody).subscribe((data:any)=>{
        //console.log(data,'<<----Response');
        const result = data.choices[0].message.content;
        this.logoDescriptions = result.split('\n');
        console.log(this.logoDescriptions,'<<--Result')
        this.spinner = false;
      },(err)=>{
        console.log(err);
      })
    }) 
  }

}
