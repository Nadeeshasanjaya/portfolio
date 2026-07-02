pipeline {
    agent { label 'docker' }

    environment {
        IMAGE_NAME = "nadeesha1/portfolio-app"
        CONTAINER_NAME = "portfolio-container"
        EC2_USER = "ubuntu"
        EC2_IP = "65.2.35.55"
    }

    stages {

        stage('Prepare Docker') {
            steps {
                sh '''
                    if command -v docker >/dev/null 2>&1; then
                        echo "Docker CLI already installed"
                        docker --version
                        exit 0
                    fi

                    echo "Docker CLI not found on this agent. Attempting install..."
                    SUDO=''
                    if [ "$(id -u)" -ne 0 ]; then
                        if command -v sudo >/dev/null 2>&1; then
                            SUDO='sudo'
                        else
                            echo "ERROR: Docker CLI missing and no root/sudo access to install it."
                            exit 1
                        fi
                    fi

                    if command -v apt-get >/dev/null 2>&1; then
                        $SUDO apt-get update
                        $SUDO apt-get install -y ca-certificates curl gnupg lsb-release
                        $SUDO mkdir -p /etc/apt/keyrings
                        curl -fsSL https://download.docker.com/linux/$(. /etc/os-release && echo "$ID")/gpg | $SUDO gpg --dearmor -o /etc/apt/keyrings/docker.gpg
                        echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/$(. /etc/os-release && echo "$ID") $(lsb_release -cs) stable" | $SUDO tee /etc/apt/sources.list.d/docker.list > /dev/null
                        $SUDO apt-get update
                        $SUDO apt-get install -y docker-ce-cli
                    elif command -v yum >/dev/null 2>&1; then
                        $SUDO yum install -y yum-utils
                        $SUDO yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
                        $SUDO yum install -y docker-ce-cli
                    elif command -v apk >/dev/null 2>&1; then
                        $SUDO apk add --no-cache docker-cli
                    else
                        echo "ERROR: Unsupported package manager. Install Docker CLI manually."
                        exit 1
                    fi

                    if ! command -v docker >/dev/null 2>&1; then
                        echo "ERROR: Docker installation attempt failed."
                        exit 1
                    fi
                    docker --version
                '''
            }
        }

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