using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class playercontroller : MonoBehaviour {

	public float speed;  //public can access and control outside of script (unlike private)

	public Text countText; 

	public Text winText;

//	public Text gameOver;
//	public float timeIncrease = 2;
//	public bool timeElapsed = false;

	private Rigidbody rb;  //rigidbody - able to have forces apply to it
	private int count;
//	private float timeLeft = 30.0f;

	// Use this for initialization
	void Start () {
		rb = GetComponent<Rigidbody> (); 
		count = 0;
		SetCountText ();
		winText.text = "";
	}
	
	// Update is called once per frame
	void Update () {
//		timeLeft -= Time.deltaTime;
//		if (timeLeft < 0) {
//			GameOver ();
//		}
	
	}

	void FixedUpdate () {
		// x and y inputs
		float moveHorizontal = Input.GetAxis ("Horizontal");
		float moveVertical = Input.GetAxis ("Vertical");

		// create movement for ball - speed
		// z is 3
		Vector3 movement = new Vector3 (moveHorizontal, 0.0f, moveVertical);

		//apply force to rigid body
		rb.AddForce (movement * speed);

	}

	// default unity function:
	// anything rigidbody to be trigger or not trigger
	// tells if should affect itself or object

	void OnTriggerEnter(Collider other) {
		if (other.gameObject.CompareTag ("Pick Up")) {
			other.gameObject.SetActive (false);
			count = count + 1;
			SetCountText ();	

		}
	}

	void SetCountText (){
		countText.text = "Acorns Eaten: " + count.ToString ();
		if (count >= 8) {
			winText.text = "You Win!";
		}

	}
}
