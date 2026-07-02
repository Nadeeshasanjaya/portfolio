pipeline {
    agent any

    environment {
        IMAGE_NAME = "nadeesha1/portfolio-app"
        CONTAINER_NAME = "portfolio-container"
        EC2_USER = "ubuntu"
        EC2_IP = "65.2.35.55"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                        echo $PASS | docker login -u $USER --password-stdin
                        docker push $IMAGE_NAME:latest
                    '''
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no $EC2_USER@$EC2_IP << 'EOF'

                        docker pull nadeesha1/portfolio-app:latest

                        docker stop portfolio-container || true
                        docker rm portfolio-container || true

                        docker run -d -p 80:80 --name portfolio-container nadeesha1/portfolio-app:latest

                        EOF
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful'
        }
        failure {
            echo '❌ Deployment Failed'
        }
    }
}